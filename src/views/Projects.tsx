import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Projects = () => {
  const navigate = useNavigate();
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

      <section className="px-[18px] lg:px-[244px] mt-[60px]">
        <Link
          to="https://notely-react-frontend.vercel.app"
          target="_blank"
          className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 justify-between mb-[32px] rounded-[32px]"
        >
          <div className="py-8">
            <div className="mb-[16px]">
              <img src="/assets/logo.ico" alt="" className="w-24 rounded-lg" />
            </div>
            <div className="">
              <p className="text-[#181818] text-[32px] font-bold mb-[16px]">
                Notely
              </p>
              <p className="text-[16px] font-normal">
                Experience seamless task management with my React-built website,
                designed to streamline productivity across three key categories:
                Home, Personal, and Business. Organize your tasks effortlessly,
                prioritize effectively, and stay on top of your commitments with
                intuitive user interfaces and smooth interactions. Enhance your
                productivity and achieve your goals efficiently with this
                versatile task management tool.
              </p>
            </div>
          </div>
          <div className="flex justify-center py-8">
            <img
              src="/assets/notely.png"
              alt=""
              className="hidden lg:block w-60"
            />
          </div>
        </Link>

        <Link
          to="https://movieinfo-2.vercel.app"
          target="_blank"
          className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 mb-[32px] rounded-[32px]"
        >
          <div className="py-8">
            <div className="mb-[16px]">
              <img src="/assets/movieinfo-logo.png" alt="" />
            </div>
            <div>
              <p className="text-[#181818] text-[32px] font-bold mb-[16px]">
                MovieBox
              </p>
              <p className="text-[16px] font-normal">
                Discover the magic of cinema with my React-based movie details
                website. Seamlessly navigate through an extensive collection of
                films, exploring synopses, cast details, ratings, and more. With
                an intuitive user interface and responsive design, users can
                effortlessly dive into their favorite movies from any device.
                Elevating the movie-watching experience, this website is a
                testament to my passion for both web development and love for
                movies.
              </p>
            </div>
          </div>
          <div className="flex justify-center py-8">
            <img
              src="/assets/movieinfo.png"
              alt=""
              className="hidden lg:block w-44"
            />
          </div>
        </Link>

        <Link
          to="https://the-autoscript-frontend.vercel.app"
          target="_blank"
          className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 mb-[32px] rounded-[32px]"
        >
          <div className="py-8">
            <div className="mb-[16px]">
              <img
                src="/assets/the-autoscript-logo.svg"
                alt=""
                className="w-24"
              />
            </div>
            <div>
              <p className="text-[#181818] text-[32px] font-bold mb-[16px]">
                The Autoscript
              </p>
              <p className="text-[16px] font-normal">
                This project is a user-friendly web application built with React
                that leverages cutting-edge speech recognition technology to
                transcribe audio files into text with remarkable accuracy. With
                a sleek and intuitive interface, users can easily upload audio
                files and receive precise transcriptions in a matter of seconds.
                Whether it's professionals needing accurate documentation or
                individuals looking to easily convert audio content into text.
              </p>
            </div>
          </div>
          <div className="flex justify-center py-8">
            <img
              src="/assets/the-autoscript.png"
              alt=""
              className="hidden lg:block w-72"
            />
          </div>
        </Link>

        <section className=" bg-[#F6F6F6] px-6 w-full h-[565px] flex flex-col justify-center items-center lg:grid-cols-2 mb-[32px] rounded-[32px] ">
          <img src="/assets/Stars.png" alt="" />
          <h3 className="text-[#181818] text-[20px] text-center lg:text-[32px] font-bold mt-[11px]">
            YOUR PROJECT GOES HERE
          </h3>
          <p className="text-[16px] font-normal mt-[16px] text-center">
            Let’s turn your idea into a visual reality
          </p>
          <div className="flex items-center w-full lg:w-[201px] mt-[34px] lg:mt-[90px]">
            <button
              className="bg-gradient-to-r from-black to-black w-full py-[16px] px-[32px] rounded-[9px] text-white"
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
