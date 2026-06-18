import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN: [number, number, number, number] = [0.55, 0, 1, 0.45];

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/oluwasemilore-akinnuli-921a2124b',
    label: 'LinkedIn',
    icon: '/assets/LinkedIn.png',
  },
  {
    href: 'https://github.com/AkinnuliFavour',
    label: 'GitHub',
    icon: '/assets/Github.svg',
  },
];

// Stagger variants for the menu items
const menuContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const menuItem: Variants = {
  hidden: { opacity: 0, x: -28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.42, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    x: -20,
    filter: 'blur(4px)',
    transition: { duration: 0.22, ease: EASE_IN },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.28, ease: 'easeIn', delay: 0.1 },
  },
};

const drawerVariants: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: '0%',
    opacity: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.32, ease: EASE_IN },
  },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const shouldReduce = useReducedMotion();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ── Mobile topbar ── */}
      <motion.div
        className="lg:hidden flex items-center justify-between px-5 pt-8 pb-4 mb-12"
        initial={shouldReduce ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <Link to="/" aria-label="Go to home">
          <img
            src="/assets/favour-logo-white.svg"
            alt="Favour logo"
            className="h-7 w-auto"
          />
        </Link>

        {/* Hamburger button */}
        <button
          id="mobile-menu-toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="relative z-[60] flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full origin-center"
            animate={
              isOpen
                ? { rotate: 45, y: 3 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full mt-[5px] origin-center"
            animate={
              isOpen
                ? { rotate: -45, y: -4 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </button>
      </motion.div>

      {/* ── Overlay + Drawer portal ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred backdrop */}
            <motion.div
              key="overlay"
              className="lg:hidden fixed inset-0 z-40 bg-black/60"
              variants={shouldReduce ? undefined : overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in drawer */}
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="lg:hidden fixed top-0 right-0 z-50 h-full w-[78vw] max-w-[320px] flex flex-col"
              style={{
                background:
                  'linear-gradient(160deg, rgba(15,15,15,0.97) 0%, rgba(24,24,28,0.98) 100%)',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.5)',
              }}
              variants={shouldReduce ? undefined : drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-white/[0.06]">
                <Link to="/" onClick={() => setIsOpen(false)} aria-label="Home">
                  <img
                    src="/assets/favour-logo-white.svg"
                    alt="Favour logo"
                    className="h-6 w-auto opacity-90 mt-2"
                  />
                </Link>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.07] hover:bg-white/[0.13] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M1 1l12 12M13 1L1 13" />
                  </svg>
                </button> */}
              </div>

              {/* Nav links */}
              <motion.nav
                className="flex-1 flex flex-col gap-1 px-4 pt-6"
                variants={shouldReduce ? undefined : menuContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {NAV_LINKS.map(({ to, label }) => {
                  const isActive = location.pathname === to;
                  return (
                    <motion.div key={to} variants={shouldReduce ? undefined : menuItem}>
                      <Link
                        to={to}
                        onClick={() => setIsOpen(false)}
                        className={`
                          relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-[17px] font-semibold
                          transition-all duration-200 group
                          ${isActive
                            ? 'bg-white/[0.08] text-white'
                            : 'text-[#9a9a9a] hover:text-white hover:bg-white/[0.05]'
                          }
                        `}
                      >
                        {/* Active indicator bar */}
                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-indicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-full"
                            style={{
                              background:
                                'linear-gradient(180deg, #06b6d4, #fb923c)',
                            }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )}
                        <span
                          className={
                            isActive
                              ? 'bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent'
                              : ''
                          }
                        >
                          {label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Social icons at bottom */}
              <motion.div
                className="px-6 pb-10 pt-6 border-t border-white/[0.06]"
                variants={shouldReduce ? undefined : menuItem}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p className="text-[11px] uppercase tracking-widest text-white/30 mb-4 font-medium">
                  Find me on
                </p>
                <div className="flex items-center gap-4">
                  {SOCIAL_LINKS.map(({ href, label, icon }) => (
                    <Link
                      key={label}
                      to={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.07] hover:bg-white/[0.13] transition-colors"
                    >
                      <img src={icon} alt={label} className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
