import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const ActiveLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const shouldReduce = useReducedMotion();

  return (
    <Link
      to={to}
      className={`relative hover:bg-gradient-to-r from-cyan-500 to-orange-400 hover:text-transparent hover:bg-clip-text drop-shadow-2xl transition-colors duration-200
        ${
          isActive
            ? 'bg-gradient-to-r from-cyan-500 to-orange-400 text-transparent bg-clip-text drop-shadow-2xl'
            : 'text-[#808080] font-bold'
        }
      `}
    >
      {children}

      {/* Animated active underline indicator */}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-[3px] left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-500 to-orange-400"
          initial={shouldReduce ? false : { opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
        />
      )}
    </Link>
  );
};

export default ActiveLink;