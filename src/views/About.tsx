import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations';

const About = () => {
  const navigate = useNavigate();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="text-[#808080]">
        <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full flex flex-col">
          <section className="px-[18px] lg:px-[244px]">
            <Navbar />
          </section>
          <Link
            to="/"
            className="flex justify-center mb-[86px] mt-[32px] lg:hidden"
          >
            <img src="/assets/favour-logo-white.svg" alt="" />
          </Link>

          {/* Page heading — stagger */}
          <motion.section
            className="px-[16px] lg:px-[244px] lg:mt-14"
            variants={staggerContainer(0.1, 0.1)}
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
          >
            <motion.h2
              className="text-[48px] lg:text-[70px] font-extrabold text-[#181818]"
              variants={fadeUp}
            >
              A little bit about me
            </motion.h2>
            <motion.p
              className="text-[15px] lg:text-[24px] font-normal"
              variants={fadeUp}
            >
              Who am I and what do I do?
            </motion.p>
          </motion.section>
        </div>

        <section className="px-[18px] lg:px-[244px] gap-[75px]">
          {/* Profile photo — scale + fade in */}
          <motion.section
            className="flex flex-col justify-center items-center"
            variants={scaleIn}
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
          >
            <section className="lg:w-[344px] w-[250px] px-[44px] pt-[30px] pb-[30px] rounded-[10.95px]">
              <img
                src="/assets/profile.jpeg"
                alt="Akinnuli Favour profile photo"
                className="w-[256.19px] rounded-full"
              />
            </section>
          </motion.section>

          {/* Bio text — stagger each paragraph */}
          <motion.section
            className="w-full"
            variants={staggerContainer(0.12, 0.15)}
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
          >
            <motion.h3
              className="text-[16px] font-semibold text-[#181818]"
              variants={fadeUp}
            >
              Who I am
            </motion.h3>
            <motion.p className="text-[15px] mt-[9px]" variants={fadeUp}>
              I'm{' '}
              <span className="text-[#181818]">
                Akinnuli Favour Oluwasemilore
              </span>
              , a multi-disciplinary front-end engineer based in Akure, Nigeria.
            </motion.p>
            <motion.h3
              className="text-[16px] font-semibold text-[#181818] mt-[32px]"
              variants={fadeUp}
            >
              A Brief Introduction
            </motion.h3>
            <motion.p className="text-[15px] mt-[9px]" variants={fadeUp}>
              I am a passionate Frontend Engineer with a strong foundation in
              HTML, CSS, and JavaScript, complemented by expertise in modern
              frameworks like React and frontend utility libraries like Tailwind
              CSS. Over the past two years, I've dedicated myself to honing my
              skills through a series of immersive personal projects, allowing me
              to develop a keen eye for intuitive user interfaces and seamless
              user experiences. My journey has led me to delve into the realm of
              full-stack development, where I've gained proficiency in Node.js,
              Express, and MongoDB, enabling me to create dynamic and scalable
              web applications. With a commitment to delivering clean, efficient
              code and a knack for problem-solving, I strive to leverage my
              skills to craft engaging digital experiences that make a meaningful
              impact.
            </motion.p>
            <motion.p className="text-[18px] mt-[60px]" variants={fadeUp}>
              Feel free to reach out via e-mail, or follow me on Twitter. Want
              to see where I've worked? Check out my Resume, or Connect with me
              on LinkedIn.
            </motion.p>
          </motion.section>
        </section>

        {/* CTA button — delayed fade-up */}
        <motion.div
          className="flex items-center w-full mt-[100px] mb-24 px-[16px] lg:px-[244px]"
          variants={fadeUp}
          initial={shouldReduce ? false : 'hidden'}
          animate="visible"
          transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            className="w-full px-8 py-4 hover:before:bg-black relative overflow-hidden border border-black bg-white text-black shadow-2xl rounded-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full"
            onClick={() => navigate('/contact')}
          >
            <span className="relative z-10">Get in touch</span>
          </button>
        </motion.div>
      </main>
    </PageTransition>
  );
};

export default About;
