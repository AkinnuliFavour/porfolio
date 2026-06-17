import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../utils/animations';

const Home = () => {
  const navigate = useNavigate();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="w-full text-[#808080]">
        <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full h-[550px] flex flex-col">
          <section className="px-[18px] lg:px-52 min-h-20">
            <Navbar />
          </section>

          {/* Mobile logo — fades in independently */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/"
              className="flex justify-center mb-[245px] mt-[32px] lg:hidden h-1/4"
            >
              <img src="/assets/favour-logo-white.svg" alt="" />
            </Link>
          </motion.div>

          {/* Hero content — staggered entrance (Q1-B: no data-aos, fully Framer Motion) */}
          <section className="flex justify-center min-h-[calc(100vh-100px)]">
            <motion.section
              className="w-full px-[16px] lg:max-w-[65%] lg:px-0 flex flex-col justify-center"
              variants={staggerContainer(0.11, 0.15)}
              initial={shouldReduce ? false : 'hidden'}
              animate="visible"
            >
              <motion.h2
                className="hidden lg:block text-[48px] font-extrabold"
                variants={fadeUp}
              >
                Hi 👋
              </motion.h2>

              <motion.h2
                className="text-[48px] lg:text-[70px] font-extrabold"
                variants={fadeUp}
              >
                I'm{' '}
                <span className="text-[#181818]">
                  <Typewriter
                    words={['Favour', 'Oluwasemilore', 'Akinnuli']}
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                    loop
                  />
                </span>
              </motion.h2>

              <motion.p
                className="text-[15px] lg:text-[24px]"
                variants={fadeUp}
              >
                A front-end engineer helping startups turn their visions into a
                digital reality. I specialize in building modern mobile and
                web-based apps.
              </motion.p>

              <motion.div
                className="flex flex-col lg:flex-row lg:mt-[30px] mt-[56px]"
                variants={fadeUp}
              >
                <button
                  onClick={() =>
                    window.open('/assets/AkinnuliFavour - Resume.pdf', '_blank')
                  }
                  className="before:ease relative px-8 py-3 overflow-hidden border border-black bg-black text-white shadow-2xl rounded-lg transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-black hover:before:-translate-x-44 lg:mr-[16px] text-center"
                >
                  <span className="relative z-10 text-center">See my resume</span>
                </button>
                <button
                  className="bg-[#F3F3F3] text-[#181818] before:ease relative px-8 py-3 overflow-hidden border border-[#F3F3F3] shadow-2xl rounded-lg transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-black before:opacity-5 before:duration-700 hover:shadow-black hover:before:-translate-x-44 lg:mr-[16px] mt-[17px] lg:mt-0"
                  onClick={() => navigate('/contact')}
                >
                  Get in touch
                </button>
              </motion.div>
            </motion.section>
          </section>
        </div>
      </main>
    </PageTransition>
  );
};

export default Home;
