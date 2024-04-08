import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const About = () => {
  const navigate = useNavigate()
  return (
    <main className="text-[#808080]">
       <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full flex flex-col">
           <section className="px-[18px] lg:px-[244px]">
                <Navbar />
           </section>
            <Link to='/' className="flex justify-center mb-[86px] mt-[32px] lg:hidden">
              <img src="/assets/favour-logo-white.svg" alt="" />
            </Link>
            <section className="px-[16px] lg:px-[244px] lg:mt-[121px]">
                <h2 className="text-[48px] lg:text-[70px] font-extrabold text-[#181818]">A little bit about me</h2>
                <p className="text-[15px] lg:text-[24px] font-normal">Who am I and what do I do?</p>
            </section>
            <hr className="w-full text-black opacity-10 mt-[60px]"/>
       </div>
        <section className="px-[18px] lg:px-[244px] gap-[75px]">
          <section className="flex flex-col justify-center items-center">
              <section className="h-[322.28px] lg:h-[400px] lg:w-[344px] w-[250px] px-[44px] pt-[68.9px] pb-[68.3px] rounded-[10.95px]">
                  <img src="/assets/favour.jpg" alt="" className="w-[256.19px] rounded-full"/>
              </section>
          </section>
          <section className="w-full">
              <h3 className="text-[16px] font-semibold text-[#181818]">Who I am</h3>
              <p className="text-[15px] mt-[9px]">I'm <span className="text-[#181818]">Akinnuli Favour Oluwasemilore</span>, a multi-disciplinary front-end engineer based in Akure, Nigeria.</p>
              <h3 className="text-[16px] font-semibold text-[#181818] mt-[32px]">A Brief Introduction</h3>
              <p className="text-[15px] mt-[9px]">
                I am a passionate Frontend Engineer with a strong foundation in HTML, CSS, and JavaScript, complemented by expertise in modern frameworks like React and frontend utility libraries like Tailwind CSS. Over the past two years, I've dedicated myself to honing my skills through a series of immersive personal projects, allowing me to develop a keen eye for intuitive user interfaces and seamless user experiences. My journey has led me to delve into the realm of full-stack development, where I've gained proficiency in Node.js, Express, and MongoDB, enabling me to create dynamic and scalable web applications. With a commitment to delivering clean, efficient code and a knack for problem-solving, I strive to leverage my skills to craft engaging digital experiences that make a meaningful impact.
              </p>
              <p className="text-[18px] mt-[60px]">Feel free to reach out via e-mail, or follow me on Twitter. Want to see where I’ve worked? Check out my Resume, or Connect with me on LinkedIn.</p>
          </section>
        </section>
        <div className="flex items-center w-full mt-[100px] px-[16px] lg:px-[244px]">
          <button 
            className="bg-gradient-to-r from-black to-black w-full py-[16px] px-[32px] rounded-[9px] text-white"
            onClick={() => navigate('/contact')}
          > 
            Get in touch
          </button>
        </div>
        <Footer />
    </main>
  )
}

export default About
