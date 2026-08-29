---
name: e-commerce-frontend
description: Builds and improves high-converting e-commerce frontends. Audits existing code first, avoids generic AI store templates, and adapts catalog presentation, product detail conversion architecture, cart/checkout friction, trust signals, and responsive shopping behavior to the brand and products.
---

# E-Commerce Frontend Skill

## How this works
1. Scan — inspect codebase, stack, catalog structure, cart state, checkout integration, copy, and product assets.
2. Diagnose — identify generic store templates, PDP friction, weak visual hierarchy, hidden shipping/return terms, cart drawer flaws, and trust gaps.
3. Decide — determine store model (DTC hero product, multi-category catalog, single-product, subscription, luxury/editorial, B2B), target shopper, and visual direction.
4. Fix — apply targeted upgrades using the existing stack.
5. Verify — test desktop, mobile shopping experience, variant selection, cart drawer updating, checkout transitions, accessibility, and site performance.

## New-project questions
Only ask these when the repository has no usable project code:

- What is the brand/store name and primary product line or niche?
- What store model is this: DTC brand, multi-category catalog, single hero product, subscription, luxury/editorial, or B2B?
- Who is the target shopper and what drives their purchase decision (price, quality, exclusivity, speed, problem-solving)?
- What proof and trust assets exist: customer reviews, user-generated content (UGC), certifications, guarantees, or press badges?
- What is the primary conversion path: add-to-cart (slide drawer vs page), instant buy now, subscription opt-in, or custom quote?
- Are specific product options needed (color/size swatches, quantity breaks, bundles, interactive fit guides)?
- What currency symbol and format should be used (e.g., "$", "₹", "€", "£", or multi-currency selector)?
- What shipping thresholds, return policies, or payment methods should be highlighted?
- Are there existing brand references, colors, or visual guidelines to follow?

## E-commerce audit

### Hero and storefront impression
- Hero fails to showcase products immediately → feature top sellers, curated collections, or flagship hero products directly above fold.
- Hero uses generic SaaS CTAs ("Get Started", "Learn More") → use commercial purchase actions ("Shop the Collection", "Explore Best Sellers", "Claim Your Bundle").
- Auto-rotating hero carousel hides core offerings → replace slider with a strong static grid or focused hero product visual.
- Missing category entry points → provide clear visual category pathways (category pills, image grid tiles, or collection cards).
- Announcement bar is cluttered or wasted → present single clear offer or service guarantee (e.g., "Free express shipping over $50").

### Product catalog and grid presentation
- Generic, uniform product cards with no visual hierarchy → highlight bestsellers, new arrivals, or promotional items with distinct badges or grid sizing.
- Product cards omit key decision info → display product title, rating summary (stars + count), clear price, compare-at pricing, and secondary hover preview.
- Quick Add / Add to Cart missing or clunky → enable seamless quick-add or instant slide-out variant selector without interrupting browsing.
- Weak filtering and sorting UI → provide intuitive, reactive filter panels (price range, size, color swatches, availability, category).
- Image thumbnails cropped or inconsistent → enforce uniform aspect ratios (1:1 square or 4:5 portrait) with consistent background treatment.

### Product Detail Page (PDP) architecture
- Media gallery relies on small, non-zoomable thumbnails → implement prominent main media viewer, thumbnail strip, hover/pinch zoom, and mobile swipe gallery.
- Price, variant pickers, and primary CTA pushed below the fold → arrange title, ratings, pricing, variant selectors, and "Add to Cart" button high up in the viewport.
- Variant pickers use drop-downs for visual options → replace select boxes with interactive color swatches, button pills, and clear stock status indicators.
- Missing sticky mobile buy bar → add sticky bottom CTA bar when scrolling past the main buy module on mobile screens.
- Product details dumped in long paragraph text → organize specs, materials, dimensions, care instructions, and shipping info into scannable accordions or tabs.
- Missing volume discounts or cross-sells → integrate complementary add-ons, "Frequently Bought Together" bundles, or tiered quantity pricing near the buy box.

### Cart and checkout friction
- Full-page redirect on Add to Cart interrupts shopping → implement a smooth, responsive slide-out cart drawer with real-time state updates.
- Hidden shipping costs until final checkout step → feature a free-shipping progress threshold indicator inside the cart drawer.
- Cart items lack clear editing capabilities → enable instant inline quantity controls, variant switching, item removal, and subtotal recalculation.
- Cart drawer lacks security and payment assurances → display trusted payment icons (Apple Pay, Shop Pay, Visa, PayPal) and return policy micro-copy near checkout.
- Unexpected fees or taxes added late → provide transparent estimated shipping and tax calculations before checkout transition.

### Trust, reviews, and social proof
- Reviews buried at page bottom without summary metrics → place rating average and review count directly under the product title, linking to detailed review section.
- Reviews look fake or unverified → display verified buyer badges, rating breakdown bars, customer photos/videos, and filterable review attributes.
- Missing risk-reduction guarantees → showcase money-back guarantee, free return policy, warranty terms, and secure checkout badges near action buttons.
- Press logos or endorsements lack context → pair press logos with pull-quote snippets highlighting product praise.

### Copy, pricing, and promotional clarity
- Prices missing currency symbol or using wrong regional format → format prices with explicit currency symbols (e.g., "$", "₹", "€", "£") appropriate to the market.
- Prices read at same size as body text → make pricing bold and prominent; highlight savings clearly (e.g., "Save $20 (25% OFF)" or "Save ₹500 (20% OFF)").
- Strikethrough pricing without clear discount logic → show original price, sale price, and exact savings badge.
- Promotional codes hidden or hard to apply → surface active codes near cart or hero announcement bar.
- Product descriptions use marketing jargon instead of customer outcomes → focus copy on materials, solve-for problems, craftsmanship, and real-world usage.

### Layout, typography, and visual hierarchy
- Overloaded pages with competing badges ("SALE", "NEW", "HOT", "BESTSELLER") → limit badge density to preserve visual focus.
- Low contrast on variant swatches or out-of-stock states → ensure strong visual distinction between active, available, and disabled options.
- Unclear container rhythm → enforce consistent spacing scale (8, 16, 24, 32, 48, 64px) across catalog and PDP modules.

### Mobile shopping experience
- Desktop layout simply shrinks on mobile screens → optimize image galleries for touch/swipe, ensure 44px minimum tap targets for swatches and CTAs.
- Sticky elements block cart or checkout controls → keep sticky bottom bar clear of chat widgets, cookie notices, or promo overlays.
- Multi-step checkout frustrating on mobile → support one-tap express payment buttons (Apple Pay, Google Pay, Shop Pay).
- Header hides cart item count → maintain sticky header with visible cart badge icon.

### Performance and accessibility
- Heavy high-res product photos slow catalog pages → use responsive image srcset, WebP/AVIF formats, and lazy load images below fold.
- Missing image alt text → provide descriptive alt text for product images, including color variant and detail view.
- Non-semantic form controls for quantity or swatches → implement accessible ARIA roles, labels, and visible keyboard focus states.

## Store pattern selection
- Product-Led DTC Brand → use when showcasing a single hero product or flagship line with rich storytelling, lifestyle media, and feature deep-dives.
- Multi-Category Catalog / Retailer → use when quick discovery, category cards, high-density grids, robust filters, and quick-add matter most.
- Single-Product Store → use when operating a focused sales funnel with hero video/demo, sticky purchase bar, comparison table, and heavy proof.
- Subscription / Recurring Delivery → use when featuring subscribe-and-save pricing toggles, delivery frequency pickers, and flexible cancellation terms.
- Luxury / High-End Editorial → use when minimalist typography, generous whitespace, large lifestyle imagery, and brand narrative carry the price point.
- B2B / Wholesale Store → use when volume pricing tables, bulk order grids, SKU search, quick CSV import, and quote request workflows drive orders.

## Purchase persuasion checks
- Can a visitor identify what is sold, key benefits, and pricing within 3 seconds of viewing the page?
- Does the product page earn the purchase before asking for checkout commitment?
- Are shipping speeds, delivery estimates, and return policies transparent before checkout?
- Is stock availability, sizing guidance, or variant selection completely clear?
- Does the cart drawer actively motivate basket building (e.g., free shipping progress bar, complementary add-ons)?
- Are trust signals (reviews, guarantees, security icons) positioned adjacent to risk moments (buy button, checkout trigger)?
- Does the mobile shopping experience feel as fast, responsive, and effortless as a native app?

## Content flow
Use a flexible order, not a rigid template:

**Storefront / Home:**
Header/Nav (with search & cart indicator) → Hero/Collection Spotlight → Featured Catalog Grid / Bestsellers → Value Props / Material Story → Customer Proof / UGC / Press → Risk-Reduction / Guarantees → Trust Footer

**Product Detail Page (PDP):**
Breadcrumbs → Product Title + Rating Summary → Media Gallery + Buy Box (Price, Swatches, Qty, Add to Cart, Express Pay) → Trust Badges → Product Breakdown / Accordions → Bundle / Cross-sell → Reviews & Q&A → Related Products

## Common AI e-commerce failures

- Reusing generic SaaS landing page layouts (hero headline + 2 buttons + tech mockup) for physical or digital store items.
- Displaying products in uniform card grids with no Add-to-Cart action, hover state, or variant indicators.
- Using select dropdown menus for 2-color options instead of visual color swatches.
- Forcing full-page reloads when items are added to cart instead of opening a slide-out cart drawer.
- Hiding shipping fees, delivery timelines, or return terms until the last checkout step.
- Inventing fake round review scores without star distributions or verified buyer tags.
- Showing static low-res product images with no zoom, multi-angle views, or lifestyle context.
- Giving equal visual weight to "Add to Cart" and "Wishlist" or "Share" buttons.
- Using generic startup dark/neon themes for organic food, apparel, or home goods stores.
- Displaying prices without clear currency formatting, unit context, or compare-at discount calculations.

## High-impact upgrades

- Implement a slide-out Cart Drawer with a free shipping progress bar and one-click add-on items.
- Replace dropdown selectors with visual color swatches and clear out-of-stock indicators.
- Add a sticky mobile "Add to Cart" bar when users scroll past the main buy box.
- Add instant Quick View / Quick Add controls to catalog grid items.
- Restructure the PDP buy box to highlight savings %, rating summary, and money-back guarantee.
- Upgrade the reviews section with rating distribution filters, verified buyer badges, and customer photo galleries.
- Optimize image loading with WebP/AVIF formats, proper aspect ratio containers, and responsive srcset attributes.
- Add clear micro-copy for shipping speeds, return windows, and payment options near the primary checkout button.

## Fix priority

1. Clarify product offering, pricing hierarchy, and primary CTA paths
2. Streamline PDP buy box (media, pricing, swatches, Add to Cart, express checkout)
3. Upgrade cart experience (slide drawer, inline edits, free shipping threshold bar)
4. Improve product discovery (catalog grids, badges, reactive filters, quick-add)
5. Strengthen trust signals (reviews, guarantees, transparent shipping/returns)
6. Optimize mobile shopping experience, touch targets, and sticky CTAs
7. Add accessibility, image performance polish, and smooth state updates

## Do not

- Invent fake reviews, fake countdown timers, fake stock counters, or false pricing.
- Use generic SaaS or corporate landing page layouts for e-commerce stores.
- Force full page refreshes when items are added to cart.
- Hide shipping policies, delivery timelines, or return terms until checkout.
- Use drop-down select boxes for color or size choices when visual swatches/pills fit.
- Give secondary actions (Wishlist, Share) equal visual prominence to "Add to Cart".
- Rebuild the store from scratch if the existing framework or stack works.
- Introduce heavy external plugins before using native stack capabilities.

## Rules

- Inspect existing codebase files before asking questions or altering architecture.
- Work within the existing framework and styling system.
- Do not break existing cart state, product routing, or payment integration logic.
- Keep changes focused, reviewable, and responsive.
- Test at approximately 375px mobile viewport and 1280px desktop viewport widths.
- Prioritize purchase clarity, conversion, site speed, accessibility, and brand fit over superficial visual effects.
- Treat instructions as principles, not a single rigid template for every store.
