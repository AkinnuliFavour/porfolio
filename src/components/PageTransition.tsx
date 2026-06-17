import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Wraps a page with a subtle enter-only opacity fade.
 * Motion is fully disabled when the user prefers reduced motion.
 *
 * Strategy (Q2-B): enter-only — no exit animation, no layout overlap.
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
