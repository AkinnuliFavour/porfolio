import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import PageTransition from '../components/PageTransition';
import { projects } from '../utils/utils';
import ProjectCard from '../components/project-card/ProjectCard';
import { fadeUp, staggerContainer } from '../utils/animations';

const Projects = () => {
  const navigate = useNavigate();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="text-[#808080]">
        <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full flex flex-col">
          {/* Mobile collapsible nav */}
          <MobileNav />

          <section className="hidden lg:block px-[18px] lg:px-[244px]">
            <Navbar />
          </section>

          {/* Page heading — staggered */}
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
              Projects
            </motion.h2>
            <motion.p
              className="text-[15px] lg:text-[24px] font-normal"
              variants={fadeUp}
            >
              Projects and ideas I've worked on recently
            </motion.p>
          </motion.section>

          <hr className="w-full text-black opacity-10 mt-[20px]" />
        </div>

        {/* ── Project Grid ── */}
        {/* ProjectCard has its own IntersectionObserver animation — left untouched */}
        <section
          className="px-[18px] lg:px-[100px] xl:px-[244px] mt-[60px]"
          aria-label="Project showcase"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                url={project.link}
                logo={project.logo}
                screenshots={project.screenshots}
                tags={project.tags}
                github={project.github}
                animationDelay={index * 80}
              />
            ))}
          </div>

          {/* ── CTA Card ── */}
          <section
            className="bg-[#F6F6F6] px-6 w-full h-[565px] flex flex-col justify-center items-center mb-24 rounded-[32px] mt-8"
            aria-label="Work with me"
          >
            <img src="/assets/Stars.png" alt="" aria-hidden="true" />
            <h3 className="text-[#181818] text-[20px] text-center lg:text-[32px] font-bold">
              YOUR PROJECT GOES HERE
            </h3>
            <p className="text-[16px] font-normal text-center">
              Let's turn your idea into a visual reality
            </p>
            <div className="flex items-center justify-center w-full lg:w-[201px] mt-[34px] lg:mt-4">
              <button
                className="before:ease relative px-8 py-3 overflow-hidden border border-black bg-black text-white shadow-2xl rounded-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-black hover:before:-translate-x-40"
                onClick={() => navigate('/contact')}
              >
                Get in touch
              </button>
            </div>
          </section>
        </section>
      </main>
    </PageTransition>
  );
};

export default Projects;
