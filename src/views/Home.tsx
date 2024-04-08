import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <section className="lg:mt-[121px] flex justify-center">
          <section className="w-full px-[16px] lg:max-w-[65%] lg:px-0 flex flex-col">
            <h2 className="lg:hidden text-[48px] font-extrabold">Hi 👋</h2>
            <h2 className="text-[48px] lg:text-[70px] font-extrabold">
              I'm <span className="text-[#181818]">Akinnuli Favour</span>
            </h2>
            <p className="text-[15px] lg:text-[24px] mt-[30px]">
              A front-end engineer helping startups turn their visions into a
              digital reality. I specialize in building modern mobile and
              web-based apps.
            </p>
            <div className="flex flex-col lg:flex-row lg:mt-[30px] mt-[56px]">
              <Link
                to="https://testfutaedu-my.sharepoint.com/:w:/g/personal/akinnulifocsc2022_futa_edu_ng/EUJxb1B4kANNor6sus7YKhUBF5x-k8ktByHLAWl1nd2SWw?email=oluwasemiloreakinnuli%40gmail.com&e=h9QRJh"
                target="_blank"
                className="bg-gradient-to-r from-black to-black text-white px-[32px] py-[16px] rounded-[9px] lg:mr-[16px]"
              >
                See my resume
              </Link>
              <button
                className="bg-[#F3F3F3] text-[#181818] px-[32px] py-[16px] rounded-[9px] mt-[17px] lg:mt-0"
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
          <Link
            to="https://notely-react-frontend.vercel.app"
            target="_blank"
            className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 justify-between mb-[32px] rounded-[32px]"
          >
            <div className="py-8">
              <div className="mb-[16px]">
                <img
                  src="/assets/logo.ico"
                  alt=""
                  className="w-24 rounded-lg"
                />
              </div>
              <div className="">
                <p className="text-[#181818] text-[32px] font-bold mb-[16px]">
                  Notely
                </p>
                <p className="text-[16px] font-normal">
                  Experience seamless task management with my React-built
                  website, designed to streamline productivity across three key
                  categories: Home, Personal, and Business. Organize your tasks
                  effortlessly, prioritize effectively, and stay on top of your
                  commitments with intuitive user interfaces and smooth
                  interactions. Enhance your productivity and achieve your goals
                  efficiently with this versatile task management tool.
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
                  website. Seamlessly navigate through an extensive collection
                  of films, exploring synopses, cast details, ratings, and more.
                  With an intuitive user interface and responsive design, users
                  can effortlessly dive into their favorite movies from any
                  device. Elevating the movie-watching experience, this website
                  is a testament to my passion for both web development and love
                  for movies.
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
        </section>
      </section>
      <section className="flex flex-col justify-center items-center">
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
          <div className="flex items-center w-full lg:w-[201px] mt-[34px] lg:mt-0">
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

export default Home;
