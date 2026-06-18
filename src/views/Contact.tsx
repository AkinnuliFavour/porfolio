import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../utils/animations';

const Contact = () => {
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
              Get in touch
            </motion.h2>
            <motion.p
              className="text-[15px] lg:text-[24px] font-normal"
              variants={fadeUp}
            >
              Let's build something awesome.
            </motion.p>
          </motion.section>

          <hr className="w-full text-black opacity-10 mt-[60px]" />
        </div>

        <section className="px-[16px] lg:px-[244px] mb-24">
          {/* Form card — fade-up with slight delay after heading */}
          <motion.section
            className="mt-[20px] bg-[#F6F6F6] shadow-xl rounded-[12px]"
            variants={fadeUp}
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
            transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center py-[18px] border-b border-b-[rgba(255,255,255,0.25)]">
              <h3 className="text-[16px] font-medium text-[#181818]">
                New Message
              </h3>
            </div>
            <form
              action="https://formsubmit.co/ee06fa15c50858f71c4dc687f1d4d4d5 "
              method="POST"
              className="px-[16px] lg:px-[32px] py-[10px]"
            >
              {/* Form fields — staggered reveal */}
              <motion.div
                variants={staggerContainer(0.07, 0.35)}
                initial={shouldReduce ? false : 'hidden'}
                animate="visible"
              >
                <motion.div
                  className="h-[35px] mb-[16px] flex items-center"
                  variants={fadeUp}
                >
                  <label
                    htmlFor="email"
                    className="text-[14px] font-medium text-[#181818]"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full px-2 ml-[8px] bg-[#F6F6F6] outline-none text-[14px] rounded-sm outline-1 focus:outline-black"
                  />
                </motion.div>

                <motion.div
                  className="h-[35px] mb-[16px] flex items-center"
                  variants={fadeUp}
                >
                  <label
                    htmlFor="name"
                    className="text-[14px] font-medium text-[#181818]"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-2 ml-[8px] bg-[#F6F6F6] outline-none text-[14px] rounded-sm outline-1 focus:outline-black"
                  />
                </motion.div>

                <motion.div
                  className="h-[35px] mb-[32px] flex items-center"
                  variants={fadeUp}
                >
                  <label
                    htmlFor="subject"
                    className="text-[14px] font-medium text-[#181818]"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter subject"
                    className="w-full px-2 ml-[8px] bg-[#F6F6F6] outline-none text-[14px] rounded-sm outline-1 focus:outline-black"
                  />
                </motion.div>
              </motion.div>

              <hr />

              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Write your message here"
                className="w-full p-[24px] bg-[#F3F3F3] mt-[32px] rounded-[12px] resize-none outline-none text-[14px] outline-1 focus:outline-black"
              />

              <div className="flex justify-center lg:justify-end py-[16px]">
                <motion.button
                  className="w-full lg:px-12 hover:before:bg-black relative h-[50px] overflow-hidden border border-black bg-white px-3 text-black shadow-2xl rounded-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full"
                  whileHover={shouldReduce ? {} : { scale: 1.015 }}
                  whileTap={shouldReduce ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="relative z-10">Send</span>
                </motion.button>
              </div>
            </form>
          </motion.section>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
