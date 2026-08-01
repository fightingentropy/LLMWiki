import { describe, expect, test } from "bun:test";
import {
  createMutationSecurity,
  readJsonBody,
  RequestBodyError,
  SESSION_COOKIE_NAME,
} from "./server-security";

const SESSION = "session-token-for-tests";
const CSRF = "csrf-token-for-tests";

function request(
  path: string,
  overrides: { method?: string; headers?: Record<string, string>; body?: string } = {}
): Request {
  return new Request(`http://localhost:3000${path}`, {
    method: overrides.method || "POST",
    headers: {
      host: "localhost:3000",
      origin: "http://localhost:3000",
      "sec-fetch-site": "same-origin",
      cookie: `${SESSION_COOKIE_NAME}=${SESSION}`,
      "x-csrf-token": CSRF,
      ...overrides.headers,
    },
    body: overrides.body,
  });
}

describe("localhost mutation security", () => {
  test("accepts only a same-origin POST with both per-process tokens", () => {
    const security = createMutationSecurity(3000, { sessionToken: SESSION, csrfToken: CSRF });
    expect(security.guardMutation(request("/api/sync"))).toBeNull();

    expect(security.guardMutation(request("/api/sync", { method: "GET" }))?.status).toBe(405);
    expect(security.guardMutation(request("/api/sync", {
      headers: { "sec-fetch-site": "cross-site" },
    }))?.status).toBe(403);
    expect(security.guardMutation(request("/api/sync", {
      headers: { origin: "http://evil.example" },
    }))?.status).toBe(403);
    expect(security.guardMutation(request("/api/sync", {
      headers: { host: "attacker.example" },
    }))?.status).toBe(403);
    expect(security.guardMutation(request("/api/sync", {
      headers: { "x-csrf-token": "wrong-token-for-tests" },
    }))?.status).toBe(403);
    expect(security.guardMutation(request("/api/sync", {
      headers: { cookie: `${SESSION_COOKIE_NAME}=wrong-session-value` },
    }))?.status).toBe(401);
  });

  test("session bootstrap requires an established same-origin session", () => {
    const security = createMutationSecurity(3000, { sessionToken: SESSION, csrfToken: CSRF });
    expect(security.guardSessionRequest(request("/api/session"))).toBeNull();
    expect(security.guardSessionRequest(request("/api/session", { method: "GET" }))?.status).toBe(405);
    expect(security.guardSessionRequest(request("/api/session", {
      headers: { cookie: "" },
    }))?.status).toBe(401);
  });

  test("sets a strict HttpOnly process-session cookie without exposing its value to JS", () => {
    const security = createMutationSecurity(3000, { sessionToken: SESSION, csrfToken: CSRF });
    const response = security.attachSessionCookie(new Response("ok"));
    const cookie = response.headers.get("set-cookie") || "";
    expect(cookie).toContain(`${SESSION_COOKIE_NAME}=${SESSION}`);
    expect(cookie).toContain("HttpOnly");
    expect(cookie).toContain("SameSite=Strict");
    expect(response.headers.get("cache-control")).toBe("no-store");
  });
});

describe("bounded JSON bodies", () => {
  test("parses a JSON request within the limit", async () => {
    const req = request("/api/ingest", {
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ files: ["misc/ok.md"] }),
    });
    await expect(readJsonBody(req, 1024)).resolves.toEqual({ files: ["misc/ok.md"] });
  });

  test("rejects oversized and non-JSON bodies before parsing", async () => {
    const oversized = request("/api/ingest", {
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ value: "x".repeat(256) }),
    });
    try {
      await readJsonBody(oversized, 64);
      throw new Error("expected oversized body to fail");
    } catch (error) {
      expect(error).toBeInstanceOf(RequestBodyError);
      expect((error as RequestBodyError).status).toBe(413);
    }

    const wrongType = request("/api/ingest", {
      headers: { "content-type": "text/plain" },
      body: "{}",
    });
    try {
      await readJsonBody(wrongType, 64);
      throw new Error("expected wrong content type to fail");
    } catch (error) {
      expect(error).toBeInstanceOf(RequestBodyError);
      expect((error as RequestBodyError).status).toBe(415);
    }
  });
});
