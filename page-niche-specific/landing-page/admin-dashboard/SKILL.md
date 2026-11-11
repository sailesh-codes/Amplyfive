---
name: admin-dashboard
description: Builds and improves universal, production-grade admin dashboards and back-office consoles. Audits existing code first, eliminates generic AI dashboard tropes (unprotected /admin client routes, fake static KPI cards, rainbow neon charts, unpaginated tables), and engineers secure, high-density back-office systems—adaptable across e-commerce stores, portfolio media/content CMS, lightweight ERPs, CRMs, and SaaS platforms—with server-side route guards, role-based access control (RBAC), universal data tables, asset managers, and responsive ergonomics.
---

# Universal Admin Dashboard & Back-Office Architecture Skill

You are the Principal Design Systems Architect, Senior UI/UX Director, and Lead Security Engineer responsible for mission-critical enterprise back-office consoles, administrative suites, and internal tooling.

Every administrative interface you design and construct must reflect the engineering rigor, optical discipline, and aesthetic maturity of world-class technology institutions (Stripe, Linear, Vercel, Datadog). 

Zero amateur mistakes. Zero decorative fluff. Zero AI slop.

---

## The Zero AI Slop & Executive Design Standard

Generic AI-generated dashboards suffer from recognizable visual tropes: decorative cartoon emojis, meaningless circular icon badges, neon purple gradients, and arbitrary green washes. Any presence of these patterns represents an immediate failure of design intelligence.

### 1. Absolute Prohibition of Decorative Emojis & Icon Slop
- **NEVER** use emojis anywhere in the interface: no rockets, smiley faces, lightning bolts, sparkles, lightbulbs, fire icons, robots, or brain symbols in navigation links, page titles, stat cards, status pills, or buttons.
- **NEVER** place generic icons inside arbitrary colored circular or rounded backgrounds (the ubiquitous "icon-in-a-colored-box" AI trope).
- **ALWAYS** use crisp, purposeful, professional vector line iconography (Lucide, Radix Icons, or clean inline SVGs) rendered at a uniform 16px or 20px scale in muted monochrome, where every glyph directly communicates a functional affordance.

### 2. Elimination of the "Three Generic Cards" Grid
- **NEVER** render 3 or 4 identical rounded boxes across the screen with an icon in a colored bubble, a bold number, and a line of generic text.
- **ALWAYS** implement asymmetrical, information-dense operational layouts:
  - **Hero Operational Summary**: Wide consolidated metric bar with unified boundary rules and integrated period comparators.
  - **Master-Detail Splits**: 2/3 primary data workspace paired with 1/3 contextual activity stream or inspector drawer.
  - **High-Density Data Grids**: Clean tabular layouts where data rows—not empty whitespace or oversized cards—take visual precedence.

### 3. Strict 3-Accent Color Architecture (No Green Washes)
- **NEVER** flood the screen with green cards, green borders, green progress bars, and pulsating green dots.
- **NEVER** use uncalibrated rainbow palettes, multi-colored neon gradients, or bright saturated card fills.
- **ALWAYS** operate under an ultra-disciplined **Three-Accent Color System** across the entire application:
  1. **Primary Operational Accent (Brand Indigo / Slate Blue)**: Used exclusively for active navigation states, primary interactive buttons, selection checkboxes, and keyboard focus rings.
  2. **Critical / Destructive Accent (Crimson / Deep Rose)**: Used with extreme scarcity strictly for destructive actions (Delete, Terminate, Revoke Session), server errors, and security warnings.
  3. **Contextual Attention Accent (Muted Amber / Ochre)**: Used strictly for items requiring administrator review (Pending Approval, Draft State, Low Stock Alert).
- **Monochromatic Success & Operational States**: Routine successful states, active accounts, and completed operations are communicated through **calibrated monochrome typography**, subtle checkmark line icons, and neutral muted borders—never eye-straining neon green.

```
┌────────────────────────────────────────────────────────────────────────┐
│             EXECUTIVE 3-ACCENT COLOR SYSTEM SPECIFICATION             │
├────────────────────────────────────────────────────────────────────────┤
│ 65% NEUTRAL CANVAS                                                     │
│ Dark: Deep Obsidian (#0B0F17) | Structural Slate (#111827)            │
│ Light: Pure Architectural White (#FFFFFF) | Clean Mist (#F8FAFC)       │
├────────────────────────────────────────────────────────────────────────┤
│ 25% STRUCTURAL SURFACES & HAIRLINE DIVIDERS                            │
│ Card Surface: #151D2C (Dark) | #FFFFFF (Light)                         │
│ Hairline Borders: 1px solid rgba(255, 255, 255, 0.07) (Dark)           │
│                   1px solid rgba(15, 23, 42, 0.08) (Light)             │
│ Headers & Footers: Subtle tone shift (1-2% contrast from canvas)       │
├────────────────────────────────────────────────────────────────────────┤
│ 10% THREE INTENTIONAL FUNCTIONAL ACCENTS ONLY                          │
│ [1] Operational Primary: Indigo/Blue (#3B82F6 / #4F46E5)               │
│ [2] Critical/Destructive: Crimson (#EF4444 / #DC2626)                  │
│ [3] Attention/Pending: Muted Amber (#F59E0B / #D97706)                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## How this works

1. **Scan** — inspect routing architecture, authentication layer, session cookie configuration, middleware guards, API authorization, data models, table patterns, and asset storage.
2. **Diagnose** — identify critical security vulnerabilities (unprotected `/admin` routes, client-only route redirection, missing server-side RBAC, exposed keys, IDOR/BOLA) and UI flaws (generic card dumps, decorative emojis, rainbow charts, unpaginated tables, missing error/loading states).
3. **Decide** — define the operational domain (E-Commerce Store, Portfolio & Media CMS, CRM / Lead Management, Lightweight ERP / Operations, or General Back-Office), administrator role hierarchy, data density requirements, and audit logging needs.
4. **Fix** — construct a server-side route boundary, assemble a responsive collapsible layout shell, build high-density data tables with sorting/filtering/pagination, engineer CRUD mutation workflows with schema validation, and integrate an intuitive media asset drawer.
5. **Verify** — execute penetration checks (direct URL access without token, unauthorized role escalation, CSRF/XSS resistance, session invalidation), cross-display UI verification (laptop, 4K monitor, mobile tablet drawer), and data mutation resilience (optimistic rollback, unsaved state warnings).

---

## New-project onboarding questions

**CRITICAL AGENT INSTRUCTION (Regardless of AI Agent used):**
- **When to ask**: Ask the user these questions **ONLY** when starting a new admin dashboard from scratch (empty repo, blank project, or no usable back-office code).
- **When to SKIP asking (Existing Projects & Alterations)**: If the user is working on an existing codebase or has specified their requirements in the prompt, **DO NOT** ask. Directly audit the codebase and systematically apply the required architecture, security guards, and design upgrades.
- **Provide a Skip Option**: Always inform the user that they can reply *"skip"* to proceed with standard, battle-tested defaults (Next.js/React + Tailwind + Session Cookie Auth + Full CRUD Data Tables).

### Questions for new projects:

1. **Primary Operational Domain**:
   - What is the primary purpose of this dashboard?
     - **[A] Universal Multi-Purpose** — Adaptable base with users, analytics, media, and general content.
     - **[B] E-Commerce Back-Office** — Orders, inventory, product catalog, customer records, and sales metrics.
     - **[C] Portfolio & Content CMS** — Project showcase editor, media library (images/videos), case studies, and blog/page publishing.
     - **[D] CRM & Client Pipeline** — Leads, contact management, deal stages, and interaction activity logs.
     - **[E] Lightweight ERP & Operations** — Purchase orders, stock movement, vendor records, and inventory auditing.
     - **[F] Other** — *(User specifies custom domain)*

2. **Authentication & Identity Architecture**:
   - How should administrator authentication be handled?
     - **[A] Server-Side Session Cookies (HttpOnly, SameSite=Strict, Secure)** — Maximum security against XSS.
     - **[B] Managed Auth Provider** — Supabase Auth, Clerk, NextAuth / Auth.js, or Firebase Auth.
     - **[C] JWT Bearer with Refresh Token Rotation** — Decoupled API and client architecture.
     - **[D] Mock / In-Memory Auth Guard** — Realistic mock authentication for rapid UI/UX prototype demonstration before backend attachment.

3. **Access Control & User Roles (RBAC)**:
   - What level of role-based access control is required?
     - **[A] Single Administrator** — Simple single-tier admin access.
     - **[B] Standard RBAC (Super Admin, Manager, Editor, Viewer)** — Granular permissions across read, write, publish, and delete.
     - **[C] Multi-Tenant / Organization-Level** — Scoped tenant permissions with isolated data partitions.

4. **Media & Content Asset Management**:
   - Does this admin panel require media asset uploads (images, videos, documents)?
     - **[A] Yes — Full Media Manager** (Drag-and-drop upload, file preview, alt text/metadata editor, CDN URL copy, search & filter).
     - **[B] Minimal Media Handling** (Single avatar or hero image upload inputs within forms).
     - **[C] No Media Handling Required** (Data-only / numerical records).

5. **Visual Theme & Data Density**:
   - What visual theme and density configuration do you prefer?
     - **[A] Dark Theme (Obsidian/Slate)** — Modern developer-tool aesthetic with high-contrast data borders.
     - **[B] Light Theme (Clean Crisp)** — Traditional enterprise software canvas with subtle neutral dividers.
     - **[C] Dual Theme with System Toggle** — Persistent dark/light switcher.
     - **[D] High-Density Compact Mode** — Tight table padding and minimized chrome for data-intensive workflows.

---

## Authentication & Security Architecture

An administrative dashboard is the highest-value attack surface of any application. Security must be architectural, layered, and strictly non-negotiable.

```
┌────────────────────────────────────────────────────────────────────────┐
│               DEFENSE-IN-DEPTH ADMIN SECURITY BOUNDARY                 │
├────────────────────────────────────────────────────────────────────────┤
│ [1] INCOMING REQUEST TO /admin/* or /api/admin/*                       │
│     │                                                                  │
│     ▼                                                                  │
│ [2] EDGE / SERVER MIDDLEWARE GATE                                      │
│     ├─ Validate Cryptographic Session Cookie (HttpOnly, Secure)        │
│     ├─ Reject direct URL tampering (Zero client-side flash of admin)   │
│     └─ If Invalid -> Terminate & 302 Redirect to /admin/login          │
│     │                                                                  │
│     ▼                                                                  │
│ [3] RBAC & IDENTITY RESOLUTION                                         │
│     ├─ Decode verified user context (ID, Role, Tenant)                 │
│     ├─ Check Route Permission (e.g., role in ['superadmin', 'manager'])│
│     └─ If Insufficient -> 403 Forbidden Error Boundary                │
│     │                                                                  │
│     ▼                                                                  │
│ [4] RATE LIMITING & BRUTE FORCE SHIELD                                 │
│     ├─ Sliding-window rate limiter on /api/auth/login                  │
│     └─ Lockout after 5 consecutive failed login attempts               │
│     │                                                                  │
│     ▼                                                                  │
│ [5] DATA LAYER AUTHORIZATION (BOLA / IDOR PREVENTION)                  │
│     ├─ Bind DB queries to verified session context                     │
│     ├─ CSRF Token / SameSite=Strict on all state mutations             │
│     └─ Immutable audit log record created for every state mutation     │
└────────────────────────────────────────────────────────────────────────┘
```

### 1. Bulletproof Route Protection (No URL-Bar Bypasses)
- **The Core Rule**: Navigating directly to `/admin`, `/admin/settings`, or `/admin/orders` via the browser URL bar must **never** render the admin shell, trigger background data fetches, or leak administrative UI components to an unauthenticated visitor.
- **The Client-Side Illusion Anti-Pattern**: Never rely solely on client-side React `useEffect` or Vue `onMounted` hooks to redirect unauthorized visitors. By the time a client-side redirect fires, sensitive DOM nodes and script bundles have already crossed the network boundary.
- **Server-Side Route Middleware (Next.js App Router)**:
  ```typescript
  // middleware.ts
  import { NextResponse } from 'next/server';
  import type { NextRequest } from 'next/server';

  export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Guard all administrative entry points
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
      const sessionToken = request.cookies.get('admin_session')?.value;

      if (!sessionToken || !(await verifyCryptographicSession(sessionToken))) {
        const loginUrl = new URL('/admin/login', request.url);
        loginUrl.searchParams.set('callbackUrl', encodeURI(pathname));
        return NextResponse.redirect(loginUrl);
      }
    }

    return NextResponse.next();
  }

  export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
  };
  ```
- **Node.js / Express Middleware Standard**:
  ```typescript
  export const requireAdminAuth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['admin_session'];
    if (!token) {
      return res.status(401).redirect('/admin/login?error=session_required');
    }
    const user = await authService.validateSession(token);
    if (!user || !['superadmin', 'admin', 'manager'].includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden: Insufficient privileges' });
    }
    req.user = user;
    next();
  };
  ```

### 2. Cookie Hygiene & Session Lifecycle
- **Cookie Security Directives**:
  ```http
  Set-Cookie: admin_session=<cryptographic_hash>; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800;
  ```
  - `HttpOnly`: Strictly prevents client-side scripts from reading the cookie, mitigating XSS token harvesting.
  - `Secure`: Transmitted exclusively over encrypted HTTPS connections.
  - `SameSite=Strict`: Prevents cross-site request transmission, providing inherent CSRF defense.
- **Session Timeout & Revocation**:
  - Enforce absolute session expiry (maximum 8–12 hours).
  - Implement idle detection (locks interface after 30 minutes of inactivity).
  - Provide a one-click **"Sign Out Everywhere"** action that invalidates all active session hashes in the database.

### 3. Brute-Force Rate Limiting & Account Lockout
- Apply sliding-window rate limiting to `/admin/login`:
  - Maximum 5 attempts per 15-minute window per IP / account identifier.
  - Progressive exponential backoff delays (1s, 2s, 4s, 8s) between failed submissions.
  - Automatic temporary account lockout after threshold violations with security notification dispatch.

### 4. Broken Object-Level Authorization (BOLA / IDOR) Defense
- Never trust client-supplied entity IDs in URLs, request parameters, or mutation payloads.
- Every API route and database query must verify that the authenticated administrator's session context has explicit authorization to view or mutate that exact target record.

### 5. Immutable Administrative Audit Logging
- Record every state mutation in a dedicated audit log:
  - `timestamp`: ISO-8601 UTC.
  - `actor_id`: Verified administrator identifier.
  - `action`: `CREATE` | `UPDATE` | `DELETE` | `STATUS_CHANGE` | `EXPORT`.
  - `entity_type`: Target entity name (`Product`, `Order`, `MediaAsset`, `UserRole`).
  - `entity_id`: Primary key of modified record.
  - `ip_address`: Masked client IP.
  - `diff_summary`: Sanitized summary of changed fields (strictly omitting sensitive data).

---

## Universal Layout Architecture & Chrome

A high-performance administrative console prioritizes optical stability, rapid keyboard navigation, and maximal screen real estate for tabular and form data.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   ENTERPRISE ADMIN DESKTOP SHELL (1440px+)             │
├──────────────┬─────────────────────────────────────────────────────────┤
│ [BRAND DOCK] │ [HEADER BAR] Breadcrumb | Cmd+K Search | Status | User  │
├──────────────┼─────────────────────────────────────────────────────────┤
│ [NAVIGATION] │ [PAGE HEADER] Title, Context Subtitle, Primary Actions │
│              ├─────────────────────────────────────────────────────────┤
│ • Overview   │ [OPERATIONAL METRICS BAR] Consolidated 4-Part Telemetry │
│ • Catalog    ├─────────────────────────────────────────────────────────┤
│ • Media      │ [PRIMARY DATA TABLE / WORKSPACE]                        │
│ • Customers  │ ┌─────────────────────────────────────────────────────┐ │
│ • Analytics  │ │ Filters | Search | Batch Action Bar | Export CSV    │ │
│ • Settings   │ ├─────────────────────────────────────────────────────┤ │
│              │ │ Table Rows with Monospace Figures & Status Pills    │ │
├──────────────┤ ├─────────────────────────────────────────────────────┤ │
│ [USER DOCK]  │ │ Pagination: 1-25 of 1,420 | Prev [1 2 3] Next       │ │
│ Name, Role   │ └─────────────────────────────────────────────────────┘ │
└──────────────┴─────────────────────────────────────────────────────────┘
```

### 1. Collapsible Architectural Sidebar
- **Brand & Workspace Switcher**: Top anchor displaying project logo, system title, and active environment badge (`Production`, `Staging`, `Development`).
- **Hierarchical Navigation**:
  - Organized into logical groups with subtle uppercase tracking labels (`CORE`, `CONTENT & ASSETS`, `ORGANIZATION`, `SYSTEM`).
  - Active route indicated by a clean translucent surface shift (`bg-primary/10`), a sharp 3px indicator line on the leading edge, and high-contrast typography.
  - Keyboard toggle: `Cmd/Ctrl + B` collapses sidebar to a high-density icon rail with instant floating tooltips.
- **Sticky Footer User Dock**:
  - Administrator name, role badge (`Super Admin`, `Editor`), and avatar.
  - Direct menu containing Profile Settings, Theme Preference, and **Sign Out**.

### 2. Global Command Header
- **Contextual Breadcrumbs**: Clear hierarchical path (`Dashboard / E-Commerce / Products / Edit #1042`) with clickable parent navigation.
- **Global Command Palette (`Cmd/Ctrl + K`)**:
  - Instant fuzzy search across records, customers, products, media assets, and configuration views.
  - Full keyboard accessibility: arrow key navigation, `Enter` to open, `Esc` to close.
- **Notification Center**:
  - Subtle bell trigger with unread count indicator.
  - Slide-over panel displaying operational events (new orders, user invites, webhook delivery failures).
  - Actions: "Mark All Read", unread filter, and deep-link navigation to target records.

### 3. Responsive Shell & Mobile/Tablet Ergonomics
- **Responsive Breakpoint Strategy**:
  - Viewports `< 1024px` collapse the sidebar into an accessible off-canvas drawer triggered by a minimum 44px × 44px touch target.
  - Safe-area insets (`env(safe-area-inset-left)`) enforced on mobile devices.
  - Data tables on touch viewports feature smooth horizontal scroll with subtle edge gradient fades, or transform cleanly into stacked master cards.

---

## Universal Foundational Modules

The following 6 modules form the core of every administrative system:

### Module 1: The Universal Data Table System
The primary workhorse of any back-office console. Must never be a plain `<table>` tag.
- **Column Sorting**: Tri-state sort (Ascending → Descending → Neutral) with directional chevron indicators on sortable column headers.
- **Debounced Instant Search**: Search input with clear button (`✕`), debounced by 300ms to eliminate unnecessary API requests.
- **Multi-Faceted Filter Bar**:
  - Status filter dropdown (`All`, `Active`, `Draft`, `Archived`, `Pending`).
  - Date-range selector (Today, Last 7 Days, Month to Date, Custom Range).
  - Numeric range inputs (e.g., Price, Stock quantity).
  - Active filter chips with individual dismiss buttons and a single *"Clear All"* action.
- **Batch Selection & Bulk Operations**:
  - Header checkbox supporting tri-state selection (None, Indeterminate/Some, All on Page, All in Database).
  - Floating batch action toolbar appears on row selection: *"3 items selected — [Change Status] [Export] [Delete]"*.
- **Configurable Column Visibility**: Dropdown popover allowing administrators to toggle column visibility and save layout preferences.
- **Export Engine**: One-click export of currently filtered data to clean CSV or structured JSON.
- **Pagination & Density Controls**:
  - Density toggle: Compact (32px row height for high-volume scanning) vs Comfortable (52px row height with secondary subtitles).
  - Page size selector: `10 | 25 | 50 | 100` items per page.
  - Accurate record label: *"Showing 1–25 of 1,280 records"*.

### Module 2: Content & Media Asset Manager
Essential for portfolios, marketing sites, e-commerce stores, and corporate CMS setups.
- **Drag-and-Drop Upload Zone**:
  - Dashed boundary area with hover highlight and file browser trigger.
  - Upload queue with individual progress percentage bars and cancel controls.
  - Strict client-side validation: MIME type check (e.g., `image/jpeg`, `image/png`, `image/webp`, `video/mp4`, `application/pdf`), maximum file size enforcement (e.g., 10MB per image, 100MB per video).
- **Dual Display Modes**:
  - **Grid View**: Visual card grid preserving thumbnail aspect ratios, displaying filename, file size, and quick action hover overlay.
  - **List View**: Detailed rows showing preview thumbnail, dimensions (e.g., `1920×1080`), file type badge, upload timestamp, and uploader identity.
- **Asset Detail Inspector Drawer**:
  - Slide-over panel displaying full-resolution media preview with zoom and audio/video playback.
  - One-click **"Copy CDN URL"** button with temporary confirmation feedback.
  - Editable Alt Text (accessibility/SEO), Title, and Caption with auto-save.
  - Safe Delete trigger with dependency verification (e.g., *"This asset is linked to 2 records. Deleting it will break those references."*).

### Module 3: Form & Entity Mutation Engine (CRUD)
Where administrative state modifications occur.
- **Schema-Driven Form Validation**:
  - Enforce strict client and server schemas using Zod, Yup, or Valibot.
  - Field-level validation displaying clear, actionable error messages positioned directly beneath the affected input.
- **Unsaved Changes Guard**:
  - Intercept tab closure or internal navigation when form state is dirty (`window.onbeforeunload` and router transition listener).
- **Sticky Form Action Bar**:
  - For long multi-section forms, anchor primary actions in a sticky bottom bar: *"Unsaved changes — [Discard] [Save Changes]"*.
- **Destructive Action Safety**:
  - Critical actions (e.g., deleting a database table, revoking an admin, wiping a collection) must require a **Two-Step Confirmation Modal**.
  - Administrator must explicitly type the record name or SKU to enable the destructive button: *"Type 'CONFIRM-DELETE' to proceed"*.

### Module 4: Executive Metrics & KPI Overview
Data cards that inform operational decisions without decorative noise.
- **Consolidated Metric Bar Anatomy**:
  - Label: Clear semantic title (e.g., *"Gross Merchandise Value"*, *"Active Portfolio Leads"*, *"Pending Shipments"*).
  - Metric Value: Dominant numerical figure formatted with regional currency/commas and tabular numerals (`tabular-nums`).
  - Comparative Trend Delta:
    - Positive Trend: `+12.4% vs previous period` (clean subtle badge with directional arrow).
    - Negative Trend: `-3.1% vs previous period` (clean subtle badge with directional arrow).
    - Neutral: `0.0% unchanged` (neutral gray badge).
  - Optional: Muted monochromatic sparkline illustrating the 30-day directional curve.
- **Global Time-Window Selector**:
  - Unified date range selector affecting all dashboard metrics simultaneously (Today, 7D, 30D, 90D, 12M).

### Module 5: User Management & Granular RBAC Matrix
Control who can view, mutate, and delete data.
- **User Directory**:
  - User table displaying name, email, avatar, role badge (`Super Admin`, `Manager`, `Editor`, `Viewer`), status badge (`Active`, `Invited`, `Suspended`), and last active timestamp.
  - Filterable by role and account status.
- **Role Permission Matrix**:
  - Visual grid mapping roles against functional capabilities:
    - *View Records*, *Create/Edit Records*, *Delete Records*, *Publish Live*, *Manage Media*, *Export Data*, *Manage Roles*, *Billing & Settings*.
- **Invitation & Credential Lifecycle**:
  - Expiring invitation link generation for new team members.
  - One-click trigger to invalidate credentials and force password reset.

### Module 6: System Configuration & General Settings
The engine room of the platform.
- **Profile & Credential Settings**:
  - Password and email updates requiring current-password verification.
  - Active session list displaying browser, OS, IP address, and individual *"Revoke Session"* triggers.
- **General Site/Store Preferences**:
  - Maintenance mode toggle with scheduled downtime announcement banner.
  - Public site name, primary support email, default currency, and timezone settings.
  - Webhook endpoints manager with signing secret generator and test payload trigger.

---

## Domain-Specific Adaptation Blueprints

While the architectural shell, security boundary, and data table systems are universal, adapt specific views to the project's operational domain:

### 1. E-Commerce Back-Office Setup
- **Orders Pipeline**:
  - Status progression workflow: `Pending Payment` → `Processing` → `Shipped` → `Delivered` → `Cancelled/Refunded`.
  - Order Detail View: Line items with thumbnails, customer billing/shipping address, transaction ID, tracking number input with carrier auto-detect, and printable invoice generator.
- **Catalog & Inventory Management**:
  - Variant matrix builder (Size × Color × Material) with individual SKU, price, and stock levels.
  - Low-stock threshold indicator (muted amber badge when stock `< 5`).
  - Batch price modifier and discount code generator (percentage, fixed amount, free shipping).

### 2. Portfolio & Creative Content CMS Setup
- **Project & Case Study Manager**:
  - Project editor: Title, client name, completion year, category tags, project URL, and role description.
  - Long-form markdown or rich block editor for case study narratives.
  - Showcase gallery reordering with drag-and-drop ordering handles.
  - Publishing state toggle: `Draft` (visible only in admin preview) vs `Published` (instantly live on public site).
- **Client Inquiry & Lead Inbox**:
  - Incoming contact form submissions table with status badges: `New Inquiry`, `Reviewed`, `Responded`, `Archived`.
  - Quick action to reply via default email client or view submitted project budget.

### 3. CRM & Client Pipeline Setup
- **Contact & Company Directory**:
  - Searchable list of client leads, organization details, and assigned account manager.
- **Interactive Deal Pipeline (Kanban Board)**:
  - Drag-and-drop columns: `Lead In` → `Contacted` → `Demo Scheduled` → `Proposal Sent` → `Closed Won` → `Closed Lost`.
  - Deal cards showing deal value, company name, contact avatar, and days in current stage.
- **Activity & Timeline Logger**:
  - Chronological note stream: log calls, meeting notes, emails, and schedule follow-up reminders.

### 4. Lightweight ERP & Operations Setup
- **Inventory & Warehouse Ledger**:
  - SKU movement ledger: Inbound, Outbound, Scrapped, Stock Adjustment.
  - Reorder point calculation and automated supplier purchase order drafting.
- **Supplier & Vendor Directory**:
  - Vendor records, contact details, payment terms (Net 30, Net 60), and order history.

### 5. Multi-Tenant SaaS Management Setup
- **Tenant / Organization Switcher**:
  - High-level tenant selector in navigation allowing super-admins to inspect customer workspaces.
- **Usage & Quota Telemetry**:
  - API call counts, database storage utilization bars, and seat allocation counters.
- **Feature Flag Manager**:
  - Toggle experimental features per organization or user cohort without code deployments.

---

## Layout, Typography & Surface Hygiene

### 1. Mathematical Spacing System (8pt Rhythm)
Every dimension across the admin panel must adhere to the 8pt spatial grid:
- `4px` — Micro badge padding, indicator dot offsets.
- `8px` — Icon-to-label gap, tight button horizontal padding, compact table cell vertical padding.
- `16px` — Standard card inner padding (mobile), form field separation, comfortable table cell padding.
- `24px` — Standard card inner padding (desktop), grid gutters, section headers.
- `32px` — Page title to content gap, metric card grid spacing.
- `48px` — Major section dividers.

### 2. Typography & Numerical Calibration
- **Primary Interface Font**: Clean, neutral, high-legibility sans-serif (*Inter*, *Plus Jakarta Sans*, or *Geist*).
- **Monospace Data Font**: For IDs, SKUs, currency amounts, timestamps, and hashes, always employ a calibrated monospace font (*PT Mono* or *Intel One Mono*):
  ```css
  .metric-value, .record-id, .sku-tag, .timestamp {
    font-family: 'PT Mono', 'Intel One Mono', monospace;
    font-variant-numeric: tabular-nums;
  }
  ```
- **Tabular Numerals**: Enforce `font-variant-numeric: tabular-nums` across all tables and numbers so values align vertically without horizontal jitter during updates.

---

## Verification & Penetration Testing Checklist

Before deploying any admin dashboard, execute this rigorous verification sequence:

### Security & Access Control Verification
- [ ] **Direct URL Tampering Test**: Paste `/admin`, `/admin/settings`, and `/admin/users` into an incognito browser window. Confirm zero dashboard HTML renders and the browser is immediately redirected to `/admin/login`.
- [ ] **Cookie Inspection**: Verify the auth session cookie has `HttpOnly=true`, `Secure=true`, and `SameSite=Strict`. Confirm zero sensitive tokens reside in `localStorage`.
- [ ] **API Authorization Test**: Send direct `POST`, `PUT`, or `DELETE` requests via curl/Postman to `/api/admin/*` without an auth cookie. Confirm the server returns `401 Unauthorized` or `403 Forbidden` (never `200 OK`).
- [ ] **BOLA / IDOR Verification**: Attempt to update Record A while logged in as an admin belonging to Tenant B. Verify the backend explicitly rejects the mutation.
- [ ] **Rate Limiting Test**: Submit 6 rapid incorrect passwords on `/admin/login`. Verify the 6th attempt is blocked with an HTTP `429 Too Many Requests` or lockout response.

### UI / UX & Operational Verification
- [ ] **Zero Decorative Emojis**: Verify zero emojis exist anywhere in the UI (no rockets, smiley faces, lightning bolts, sparkles, or lightbulbs).
- [ ] **Three-Accent Color Discipline**: Verify only the 3 designated functional accent colors are active; no green color washes, glowing borders, or neon fills.
- [ ] **Empty States**: Verify every table and media grid renders an informative empty state with a clear primary CTA when zero records exist.
- [ ] **Loading Skeletons**: Verify smooth skeleton loaders appear during data fetching without layout shifts (CLS = 0).
- [ ] **Sorting & Filtering**: Verify sorting chevrons toggle correctly and filters update data reactively without losing pagination position.
- [ ] **Batch Operations**: Select multiple rows, execute a bulk action, and confirm all selected items update with clear toast confirmation.
- [ ] **Media Upload Limits**: Attempt uploading an oversized file (e.g., 50MB image) and an invalid format (e.g., `.exe`). Confirm friendly, inline validation errors appear without crashing.
- [ ] **Unsaved Changes Safety**: Modify a form and attempt to click a sidebar link. Confirm a browser confirmation prompt intercepts navigation.
- [ ] **Responsive Navigation**: Test the layout at 375px (mobile), 768px (tablet portrait), 1024px (tablet landscape), 1440px (laptop), and 2560px (wide monitor). Confirm sidebar drawer works effortlessly on mobile and content containers remain anchored without horizontal scrolling.
