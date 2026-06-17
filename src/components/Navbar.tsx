import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { slideDown, staggerContainer, fadeIn } from '../utils/animations';

const Navbar = () => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.nav
      className="w-full h-[60px] px-4 mt-16 bg-white bg-opacity-25 hidden lg:flex justify-between text-lg font-medium rounded-xl"
      variants={slideDown}
      initial={shouldReduce ? false : 'hidden'}
      animate="visible"
    >
      {/* Left: logo + nav links */}
      <motion.ul
        className="flex items-center gap-[40px]"
        variants={staggerContainer(0.07, 0.1)}
        initial={shouldReduce ? false : 'hidden'}
        animate="visible"
      >
        <motion.li variants={fadeIn}>
          <ActiveLink to="/">
            <motion.img
              src="/assets/favour-logo-black.svg"
              alt="Home"
              className="w-[39.87px] h-[26px] text-black"
              whileHover={shouldReduce ? {} : { scale: 1.1 }}
              transition={{ duration: 0.18 }}
            />
          </ActiveLink>
        </motion.li>
        <motion.li variants={fadeIn}>
          <ActiveLink to="/about">About</ActiveLink>
        </motion.li>
        <motion.li variants={fadeIn}>
          <ActiveLink to="/projects">Projects</ActiveLink>
        </motion.li>
        <motion.li variants={fadeIn}>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </motion.li>
      </motion.ul>

      {/* Right: social icons */}
      <motion.div
        className="flex items-center gap-[24px] drop-shadow-2xl"
        variants={staggerContainer(0.08, 0.25)}
        initial={shouldReduce ? false : 'hidden'}
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <Link
            to="https://www.linkedin.com/in/oluwasemilore-akinnuli-921a2124b"
            target="_blank"
            className="drop-shadow-2xl"
            aria-label="LinkedIn profile"
          >
            <motion.img
              src="/assets/LinkedIn.png"
              className="text-[#808080]"
              alt="LinkedIn"
              whileHover={shouldReduce ? {} : { scale: 1.15, rotate: -5 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Link
            to="https://github.com/AkinnuliFavour"
            target="_blank"
            className="drop-shadow-2xl"
            aria-label="GitHub profile"
          >
            <motion.img
              src="/assets/Github.svg"
              className="text-[#808080]"
              alt="GitHub"
              whileHover={shouldReduce ? {} : { scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
