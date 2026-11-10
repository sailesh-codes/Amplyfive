---
name: rwaf-integration
description: Integrate RWAF (Reusable Web Application Firewall) into a Next.js application. Covers middleware setup, optional per-route integrations (Auth Guard, SSRF Guard), and frontend CSRF handling. Use this whenever a user asks to add RWAF, a firewall, or WAF protection to a project.
---

# RWAF Integration Skill

This skill walks through integrating `rwaf` into a Next.js (App Router) project. Follow the steps in order. Steps 2–4 are conditional — check whether they apply to this specific app before doing them.

## Prerequisites

- Confirm the target project is Next.js (App Router). RWAF's Next.js adapter assumes this. If the project uses Express instead, use the Express adapter pattern in Step 1b instead of 1a.
- Confirm a Redis-compatible store is available (Upstash recommended for serverless/edge deployments). If none exists yet, direct the user to create one before proceeding — RWAF cannot function without it.

## Step 1a: Install and configure middleware (Next.js — always required)

1. Install the package:
   ```bash
   npm install rwaf
   ```
   (Or, during local development against an unpublished local copy: `npm link rwaf`, after running `npm link` inside the `rwaf` package folder.)

2. Add Redis credentials to `.env.local`:

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

   Use a database dedicated to this project — do not reuse another project's Redis instance.

3. Create `middleware.ts` at the project root (or `src/` root if the project uses a `src` directory):

   ```typescript
   import { Redis } from "@upstash/redis";
   import { createMiddleware } from "rwaf";

   const redis = new Redis({
     url: process.env.UPSTASH_REDIS_REST_URL!,
     token: process.env.UPSTASH_REDIS_REST_TOKEN!,
   });

   const rwaf = createMiddleware({
     redis,
     rateLimit: { enabled: true, strategy: "sliding-window", requests: 100, windowSeconds: 60 },
     banList: { enabled: true },
     patternScanner: { enabled: true, normalizeInput: true },
     cors: { enabled: true, allowedOrigins: [/* ask user for their actual production domain(s) */] },
     headers: { enabled: true, preset: "strict" },
     csrf: { enabled: true },
     authGuard: { enabled: true },
     ssrfGuard: { enabled: true },
     responseMode: "auto",
   });

   export const middleware = rwaf.nextjs();

   export const config = {
     matcher: ["/api/:path*"],
   };
   ```

4. This single file covers, automatically, for every route matching the matcher, with no further integration work:
   - Rate limiting
   - Ban list / escalation
   - Pattern scanning (SQLi, XSS, and the rest of the rule set)
   - CORS
   - Security headers
   - Default blocked-response pages (JSON for API calls, HTML for browser navigations)

   **Stop here if the app has no login functionality and no feature that fetches a user-submitted URL — the middleware alone is sufficient.**

## Step 1b: Install and configure middleware (Express — if not Next.js)

Same as 1a, but:
```typescript
import { createMiddleware } from "rwaf";
const rwaf = createMiddleware({ /* same config shape as above */ });
app.use(rwaf.express());
```

## Step 2: Auth Guard integration — ONLY if the app has a login/authentication route

Check: does the project have a route handling login (commonly `/api/login`, `/api/auth/login`, or similar)? If no such route exists, skip this step entirely.

If it exists, add two calls inside that route's handler:

```typescript
import { authGuard } from "rwaf";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Before checking credentials — reject immediately if locked out
  if (await authGuard.isLocked(username)) {
    return new Response(JSON.stringify({ error: "Account temporarily locked" }), { status: 429 });
  }

  const isValid = /* the app's own existing credential-check logic — do not replace it */;

  // After checking credentials — report the result so Auth Guard's counters stay accurate
  await authGuard.recordAttempt({ identifier: username, success: isValid });

  if (!isValid) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }

  // ... existing session/token creation logic continues unchanged
}
```

Do not alter the app's existing password-checking logic — only wrap it with the `isLocked` check before and `recordAttempt` call after.

## Step 3: SSRF Guard integration — ONLY if the app fetches a user-submitted URL server-side

Check: does any route take a URL from request input and then make a server-side `fetch()` to it (e.g. image preview, webhook registration, link unfurling, avatar-from-URL)? If no such feature exists, skip this step entirely.

If it exists, add a check immediately before the fetch call — not earlier, to avoid the DNS-rebinding gap documented in RWAF's README:

```typescript
import { ssrfGuard } from "rwaf";

const userUrl = /* the URL from request input */;

if (!(await ssrfGuard.isUrlSafe(userUrl))) {
  return new Response(JSON.stringify({ error: "URL not permitted" }), { status: 403 });
}

const result = await fetch(userUrl); // only reached if the check passed
```

## Step 4: CSRF frontend wiring — required if the app has any form or state-changing request (POST/PUT/PATCH/DELETE)

The middleware issues a CSRF cookie automatically. The frontend must read it and attach it as a header on any state-changing request. Add this helper once, use it everywhere the app makes a POST/PUT/PATCH/DELETE request:

```typescript
function getCsrfToken(): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("waf_csrf_token="))
    ?.split("=")[1];
}

// Usage in any state-changing fetch call:
fetch("/api/some-route", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": getCsrfToken() ?? "",
  },
  body: JSON.stringify(data),
});
```

If the app uses a shared API client/wrapper (e.g. a single `apiFetch` function used everywhere), add this header inside that wrapper once rather than at every individual call site.

## Step 5: Verify

After integration, confirm:
1. `npx tsc --noEmit` passes with no type errors
2. A request to any protected route still succeeds normally
3. A deliberately malformed request (e.g. a search query containing `' OR '1'='1`) gets blocked with a `403`
4. If Step 2 was done: a locked-out account correctly rejects login attempts
5. If Step 4 was done: a POST request without the CSRF header gets rejected; with it, succeeds

## What this skill does NOT cover

- Writing the app's own credential-checking logic (Step 2 assumes it already exists)
- Building custom blocked-response pages (RWAF ships default pages; see README for the `onBlock` override if custom pages are wanted)
- Dashboard setup/authentication (separate from this integration; see RWAF's dashboard README)

