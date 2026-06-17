import type { Variants } from 'framer-motion';

/** Custom ease curve — spring-like, used for entrance animations */
const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Fade + upward slide — primary entrance variant.
 * Used for headings, text blocks, and cards.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: EASE_OUT_EXPO },
  },
};

/**
 * Fade + downward slide — used for nav bar entrance.
 */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT_EXPO },
  },
};

/**
 * Fade + scale-in — used for images / cards that benefit from a depth effect.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

/**
 * Plain fade — for elements where movement would be distracting.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/**
 * Stagger container — orchestrates child variant animations.
 * @param stagger   delay between each child  (default 0.1s)
 * @param delay     initial delay before first child (default 0.05s)
 */
export const staggerContainer = (
  stagger = 0.1,
  delay = 0.05,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
