/**
 * Amplyfive Skill Registry
 *
 * Maps skill names to their GitHub paths and metadata.
 * Only skills with actual content are marked as available.
 */

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/sailesh-codes/Amplyfive/main';

export const SKILLS = {
  // ── Page / Landing Skills ──────────────────────────────────────────
  'landing-page': {
    name: 'landing-page',
    category: 'Page / Landing',
    path: 'page-niche-specific/landing-page/landing-page/SKILL.md',
    description: 'Builds and improves distinct, high-converting landing-page frontends with brand-specific hierarchy, content, and responsive behavior.',
    available: true,
  },
  'e-commerce': {
    name: 'e-commerce',
    category: 'Page / Landing',
    path: 'page-niche-specific/landing-page/e-commerce/SKILL.md',
    description: 'Builds high-converting e-commerce frontends with catalog presentation, product detail conversion, cart/checkout friction reduction, and trust signals.',
    available: true,
  },
  'portfolio': {
    name: 'portfolio',
    category: 'Page / Landing',
    path: 'page-niche-specific/landing-page/portfolio/SKILL.md',
    description: 'Builds distinctive portfolio websites with work presentation, visual direction, and responsive behavior adapted to the owner and audience.',
    available: true,
  },
  'web-dev-portfolio': {
    name: 'web-dev-portfolio',
    category: 'Page / Landing',
    path: 'page-niche-specific/landing-page/web-dev-portfolio/SKILL.md',
    description: 'Builds high-impact web developer portfolio frontends. Eliminates cliché AI templates (terminal typing, skill bars, neon glows) and elevates code proof and technical depth.',
    available: true,
  },
  'brand-design': {
    name: 'brand-design',
    category: 'Page / Landing',
    path: 'page-niche-specific/landing-page/brand-design/SKILL.md',
    description: 'Premium brand-kit image generation and design skill for high-end brand-guidelines boards, logo systems, and visual identity decks.',
    available: true,
  },
  'admin-dashboard': {
    name: 'admin-dashboard',
    category: 'Page / Landing',
    path: 'page-niche-specific/landing-page/admin-dashboard/SKILL.md',
    description: 'Admin dashboard frontend patterns and best practices.',
    available: false, // Placeholder — no content yet
  },

  // ── Animation Skills ───────────────────────────────────────────────
  'gsap': {
    name: 'gsap',
    category: 'Animation',
    path: 'animation/gsap/gsap/SKILL.md',
    description: 'GSAP animation patterns — ScrollTrigger, timeline orchestration, performance-optimized transforms.',
    available: false,
  },
  'framer': {
    name: 'framer',
    category: 'Animation',
    path: 'animation/gsap/framer/SKILL.md',
    description: 'Framer Motion animation patterns for React — variants, layout animations, gesture-driven interactions.',
    available: false,
  },
  'anime-js': {
    name: 'anime-js',
    category: 'Animation',
    path: 'animation/gsap/anime-js/SKILL.md',
    description: 'Anime.js animation patterns — timeline staggering, SVG morphing, spring physics.',
    available: false,
  },
  'lenis': {
    name: 'lenis',
    category: 'Animation',
    path: 'animation/gsap/lenis/SKILL.md',
    description: 'Lenis smooth scroll — buttery scroll with GSAP/ScrollTrigger integration.',
    available: false,
  },
  'three-js': {
    name: 'three-js',
    category: 'Animation',
    path: 'animation/gsap/three-js/SKILL.md',
    description: 'Three.js 3D scene patterns — WebGL rendering, shaders, post-processing, performance.',
    available: false,
  },
  'vanilla-js': {
    name: 'vanilla-js',
    category: 'Animation',
    path: 'animation/gsap/vanilla-js/SKILL.md',
    description: 'Vanilla JS animation patterns — Web Animations API, IntersectionObserver, requestAnimationFrame.',
    available: false,
  },
  'shadcn': {
    name: 'shadcn',
    category: 'Animation',
    path: 'animation/gsap/shadcn/SKILL.md',
    description: 'shadcn/ui animation patterns — Radix UI transitions, Tailwind animation utilities.',
    available: false,
  },
  'tailwind': {
    name: 'tailwind',
    category: 'Animation',
    path: 'animation/gsap/tailwind/SKILL.md',
    description: 'Tailwind CSS animation utilities — custom keyframes, transition classes, motion-safe patterns.',
    available: false,
  },
};

/**
 * Get the raw GitHub URL for a skill.
 */
export function getSkillUrl(skillName) {
  const skill = SKILLS[skillName];
  if (!skill) return null;
  return `${GITHUB_RAW_BASE}/${skill.path}`;
}

/**
 * Get all available (non-placeholder) skills.
 */
export function getAvailableSkills() {
  return Object.values(SKILLS).filter(s => s.available);
}

/**
 * Get all skills grouped by category.
 */
export function getSkillsByCategory() {
  const grouped = {};
  for (const skill of Object.values(SKILLS)) {
    if (!grouped[skill.category]) grouped[skill.category] = [];
    grouped[skill.category].push(skill);
  }
  return grouped;
}
