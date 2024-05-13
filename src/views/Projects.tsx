import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../utils/utils";
import Card from "../components/Card";

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
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
        <section className="px-[16px] lg:px-[244px] lg:mt-[121px]">
          <h2 className="text-[48px] lg:text-[70px] font-extrabold text-[#181818]">
            Projects
          </h2>
          <p className="text-[15px] lg:text-[24px] font-normal">
            Projects and ideas I’ve worked on
          </p>
        </section>
        <hr className="w-full text-black opacity-10 mt-[60px]" />
      </div>

      <section className="px-[18px] lg:px-[100px] xl:px-[244px] mt-[60px]">
        {projects.map((project) => (
          <Card
            key={project.id}
            name={project.name}
            description={project.description}
            url={project.link}
            imageUrl={project.image}
            logo={project.logo}
            screenshot={project.screenshot}
            tags={project.tags}
          />
        ))}
        <section
          className=" bg-[#F6F6F6] px-6 w-full h-[565px] flex flex-col justify-center items-center lg:grid-cols-2 mb-[32px] rounded-[32px]"
          data-aos="zoom-in"
        >
          <img src="/assets/Stars.png" alt="" />
          <h3 className="text-[#181818] text-[20px] text-center lg:text-[32px] font-bold mt-[11px]">
            YOUR PROJECT GOES HERE
          </h3>
          <p className="text-[16px] font-normal mt-[16px] text-center">
            Let’s turn your idea into a visual reality
          </p>
          <div className="flex items-center justify-center w-full lg:w-[201px] mt-[34px] lg:mt-[90px]">
            <button
              className="before:ease relative px-8 py-3 overflow-hidden border border-black bg-black text-white shadow-2xl rounded-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-black hover:before:-translate-x-40"
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

export default Projects;
