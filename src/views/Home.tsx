import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const projects = [
  {
    name: "CryptoFlow",
    description:
      "A crypto-focused web app that aggregates live news from multiple sources and provides built-in portfolio tracking, helping users stay informed and manage their assets in one place. Built with React, TypeScript, TailwindCSS, and a Node.js/Express backend, the project deepened my understanding of TanStack Query v5 and refreshed my backend skills through hands-on debugging, optimization, and real-world data handling.",
    url: "https://crypto-flow-nine.vercel.app",
    logo: "/assets/cryptoflow-logo.ico",
    screenshot: "/assets/cryptoflow-bg.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Local Storage",
      "Responsive Design",
      "Node.js",
      "Express.js",
      "News API",
      "CoinGecko API",
      "TanStack Query v5",
    ],
  },
  {
    name: "MovieBox",
    description:
      "Discover the magic of cinema with my React-based movie details website. Seamlessly navigate through an extensive collection of films, exploring synopses, cast details, ratings, and more. With an intuitive user interface and responsive design, users can effortlessly dive into their favorite movies from any device.",
    url: "https://movieinfo-2.vercel.app",
    logo: "/assets/movieinfo-logo.png",
    screenshot: "/assets/movieinfo-bg.png",
    tags: [
      "React",
      "TMDB API",
      "Axios",
      "Tailwind CSS",
      "Responsive Design",
      "Supabase",
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <main className="w-full text-[#808080]">
      <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full h-[550px] flex flex-col">
        <section className="px-[18px] lg:px-[244px]">
          <Navbar />
        </section>
        <Link
          to="/"
          className="flex justify-center mb-[245px] mt-[32px] lg:hidden"
        >
          <img src="/assets/favour-logo-white.svg" alt="" />
        </Link>
        <section
          className="lg:mt-[121px] flex justify-center"
          data-aos="zoom-in"
        >
          <section className="w-full px-[16px] lg:max-w-[65%] lg:px-0 flex flex-col">
            <h2 className="lg:hidden text-[48px] font-extrabold">Hi 👋</h2>
            <h2 className="text-[48px] lg:text-[70px] font-extrabold">
              I'm{" "}
              <span className="text-[#181818]">
                <Typewriter
                  words={["Favour", "Oluwasemilore", "Akinnuli"]}
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                  loop
                />
              </span>
            </h2>
            <p className="text-[15px] lg:text-[24px] mt-[30px]">
              A front-end engineer helping startups turn their visions into a
              digital reality. I specialize in building modern mobile and
              web-based apps.
            </p>
            <div className="flex flex-col lg:flex-row lg:mt-[30px] mt-[56px]">
              <button
                onClick={() =>
                  window.open("/assets/AkinnuliFavour - Resume.pdf", "_blank")
                }
                className="before:ease relative px-8 py-3 overflow-hidden border border-black bg-black text-white shadow-2xl rounded-lg transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-black hover:before:-translate-x-44 lg:mr-[16px] text-center"
              >
                <span className="relative z-10 text-center">See my resume</span>
              </button>
              <button
                className="bg-[#F3F3F3] text-[#181818] before:ease relative px-8 py-3 overflow-hidden border border-[#F3F3F3] shadow-2xl rounded-lg transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-black before:opacity-5 before:duration-700 hover:shadow-black hover:before:-translate-x-44 lg:mr-[16px] mt-[17px] lg:mt-0"
                onClick={() => navigate("/contact")}
              >
                Get in touch
              </button>
            </div>
          </section>
        </section>
      </div>
      <section className="flex flex-col justify-center items-center mt-[137px] lg:mt-0">
        <section className="mt-[229px] w-full lg:max-w-[65%] px-[16px]">
          <p className="mb-[16px] lg:mb-[32px] font-bold text-[32px] lg:text-[48px] text-[#181818]">
            Selected Work
          </p>
          {projects.map((project) => (
            <Card
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.url}
              logo={project.logo}
              screenshot={project.screenshot}
              tags={project.tags}
            />
          ))}
        </section>
      </section>
      <section
        className="flex flex-col justify-center items-center"
        data-aos="zoom-in"
      >
        <section className="w-full lg:w-[68%] px-[16px] lg:px-6 flex flex-col lg:flex-row justify-between mt-[60px] lg:mt-[114px]">
          <section>
            <h3 className="text-[32px] lg:text-[48px] text-center lg:text-left font-bold text-[#181818]">
              Let’s work together
            </h3>
            <p className="text-[15px] lg:text-[20px] w-full lg:max-w-[48%] text-center lg:text-left mt-[8px]">
              Want to discuss an opportunity to create something great? I’m
              ready when you are.
            </p>
          </section>
          <div className="flex items-center justify-center w-full lg:w-[201px] mt-[34px] lg:mt-0">
            <button
              className="before:ease relative px-8 py-3 overflow-hidden border border-black bg-black text-white shadow-2xl rounded-lg transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:shadow-black hover:before:-translate-x-44"
              onClick={() => navigate("/contact")}
            >
              Get in touch
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
