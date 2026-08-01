import { createHash, randomBytes, timingSafeEqual } from "crypto";

export const SESSION_COOKIE_NAME = "brainwiki_session";
export const CSRF_HEADER_NAME = "x-csrf-token";

function opaqueToken(): string {
  return randomBytes(32).toString("base64url");
}

function constantTimeEqual(actual: string | null, expected: string): boolean {
  const left = createHash("sha256").update(actual || "").digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right) && actual?.length === expected.length;
}

function readCookie(req: Request, name: string): string | null {
  const cookie = req.headers.get("cookie");
  if (!cookie) return null;
  for (const pair of cookie.split(";")) {
    const divider = pair.indexOf("=");
    if (divider === -1) continue;
    if (pair.slice(0, divider).trim() !== name) continue;
    return pair.slice(divider + 1).trim();
  }
  return null;
}

function forbidden(message: string, status = 403): Response {
  return Response.json({ error: message }, { status, headers: { "Cache-Control": "no-store" } });
}

export interface MutationSecurity {
  csrfToken: string;
  guardMutation(req: Request): Response | null;
  guardSessionRequest(req: Request): Response | null;
  attachSessionCookie(response: Response): Response;
}

/**
 * A fresh instance is created once per server process. The HttpOnly session
 * cookie proves the browser loaded this process's UI; the separately returned
 * CSRF token must be echoed in a custom header on every mutation.
 */
export function createMutationSecurity(
  port: number,
  secrets: { sessionToken?: string; csrfToken?: string } = {}
): MutationSecurity {
  const sessionToken = secrets.sessionToken || opaqueToken();
  const csrfToken = secrets.csrfToken || opaqueToken();
  const allowedHosts = new Set([
    `localhost:${port}`,
    `127.0.0.1:${port}`,
    `[::1]:${port}`,
  ]);

  function guardLocalBrowserRequest(req: Request, requireOrigin: boolean): Response | null {
    const host = req.headers.get("host")?.toLowerCase() || "";
    if (!allowedHosts.has(host)) {
      return forbidden("Forbidden: unexpected Host header");
    }

    let requestUrl: URL;
    try {
      requestUrl = new URL(req.url);
    } catch {
      return forbidden("Forbidden: invalid request URL");
    }
    if (requestUrl.protocol !== "http:" || !allowedHosts.has(requestUrl.host.toLowerCase())) {
      return forbidden("Forbidden: request is not for the loopback server");
    }

    // Browsers set this header and scripts cannot override it. Requiring the
    // exact same-origin value rejects cross-site forms, images and fetches.
    if (req.headers.get("sec-fetch-site") !== "same-origin") {
      return forbidden("Forbidden: request is not same-origin");
    }

    const origin = req.headers.get("origin");
    if (requireOrigin && !origin) {
      return forbidden("Forbidden: missing Origin header");
    }
    if (origin && origin !== requestUrl.origin) {
      return forbidden("Forbidden: origin mismatch");
    }

    if (!origin) {
      const referer = req.headers.get("referer");
      if (!referer) return forbidden("Forbidden: missing Referer header");
      try {
        if (new URL(referer).origin !== requestUrl.origin) {
          return forbidden("Forbidden: referrer mismatch");
        }
      } catch {
        return forbidden("Forbidden: invalid Referer header");
      }
    }

    if (!constantTimeEqual(readCookie(req, SESSION_COOKIE_NAME), sessionToken)) {
      return forbidden("Unauthorized: refresh the wiki session", 401);
    }
    return null;
  }

  return {
    csrfToken,
    guardSessionRequest(req) {
      // POST guarantees browsers attach Origin. This endpoint does not mutate
      // state; it only discloses the second token to an established session.
      if (req.method !== "POST") return methodNotAllowed("POST");
      return guardLocalBrowserRequest(req, true);
    },
    guardMutation(req) {
      if (req.method !== "POST") return methodNotAllowed("POST");
      const blocked = guardLocalBrowserRequest(req, true);
      if (blocked) return blocked;
      if (!constantTimeEqual(req.headers.get(CSRF_HEADER_NAME), csrfToken)) {
        return forbidden("Forbidden: invalid CSRF token");
      }
      return null;
    },
    attachSessionCookie(response) {
      response.headers.append(
        "Set-Cookie",
        `${SESSION_COOKIE_NAME}=${sessionToken}; HttpOnly; SameSite=Strict; Path=/`
      );
      response.headers.set("Cache-Control", "no-store");
      return response;
    },
  };
}

export function methodNotAllowed(allowed: string): Response {
  return Response.json(
    { error: `Method not allowed; use ${allowed}` },
    { status: 405, headers: { Allow: allowed, "Cache-Control": "no-store" } }
  );
}

export class RequestBodyError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

export async function readJsonBody(req: Request, maxBytes: number): Promise<any> {
  const type = req.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (type !== "application/json") {
    throw new RequestBodyError("Content-Type must be application/json", 415);
  }
  const declared = Number(req.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > maxBytes) {
    throw new RequestBodyError(`Request body exceeds ${maxBytes} bytes`, 413);
  }
  if (!req.body) return {};

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > maxBytes) {
      await reader.cancel().catch(() => {});
      throw new RequestBodyError(`Request body exceeds ${maxBytes} bytes`, 413);
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    return text ? JSON.parse(text) : {};
  } catch {
    throw new RequestBodyError("Request body must contain valid UTF-8 JSON", 400);
  }
}
