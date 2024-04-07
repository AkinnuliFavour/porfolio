import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <main className="w-full text-[#808080]">
        <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full h-[550px] flex flex-col">
          <section className="px-[18px] lg:px-[244px]">
            <Navbar />
          </section>
          <Link to='/' className="flex justify-center mb-[245px] mt-[32px] lg:hidden">
              <img src="/assets/favour-logo-white.svg" alt="" />
          </Link>
          <section className="lg:mt-[121px] flex justify-center">
            <section className="w-full px-[16px] lg:max-w-[65%] lg:px-0 flex flex-col">
              <h2 className="lg:hidden text-[48px] font-extrabold">Hi 👋</h2>
              <h2 className="text-[48px] lg:text-[70px] font-extrabold">I'm <span className="text-[#181818]">Akin Favour</span></h2>
              <p className="text-[15px] lg:text-[24px] mt-[30px]">A front-end engineer helping startups turn their visions into a digital reality. I specialize in building modern mobile and web-based apps.</p>
              <div className="flex flex-col lg:flex-row lg:mt-[30px] mt-[56px]">
                <button className="bg-gradient-to-r from-black to-black text-white px-[32px] py-[16px] rounded-[9px] lg:mr-[16px]">See my resume</button>
                <button className="bg-[#F3F3F3] text-[#181818] px-[32px] py-[16px] rounded-[9px] mt-[17px] lg:mt-0">Get in touch</button>
              </div>
            </section>
         </section>
        </div>
         <section className="flex flex-col justify-center items-center mt-[137px] lg:mt-0">
            <section className="mt-[229px] w-full lg:max-w-[65%] px-[16px]">
                  <p className="mb-[16px] lg:mb-[32px] font-bold text-[32px] lg:text-[48px] text-[#181818]">Selected Work</p>
                  <section className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 justify-between mb-[32px] rounded-[32px]">
                    <div className="py-8">
                      <div className="mb-[16px]"><img src="/assets/logo.ico" alt="" className="w-24 rounded-lg"/></div>
                      <div className="">
                        <p className="text-[#181818] text-[32px] font-bold mb-[16px]">Notely</p>
                        <p className="text-[16px] font-normal">Notely is a side project that I’ve built to help me keep track and manage my tasks/activities for a specific period of time. It helps you keep track of taks in differrent important categories like home tasks, business tasks, personal tasks, e.t.c</p>
                      </div>
                    </div>
                    <div className="flex justify-center py-8">
                      <img src="/assets/notely.png" alt="" className="hidden lg:block w-2/3"/>
                    </div>
                  </section>
                  <section className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 mb-[32px] rounded-[32px]">
                    <div className="py-8">
                      <div className="mb-[16px]"><img src="/assets/movieinfo-logo.png" alt="" /></div>
                      <div>
                        <p className="text-[#181818] text-[32px] font-bold mb-[16px]">MovieBox</p>
                        <p className="text-[16px] font-normal">With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.</p>
                      </div>
                    </div>
                    <div className="flex justify-center py-8">
                      <img src="/assets/movieinfo.png" alt="" className="hidden lg:block"/>
                    </div>
                  </section>
            </section>
         </section>
          <section className="flex flex-col justify-center items-center">
            <section className="w-full lg:w-[68%] px-[16px] lg:px-6 flex flex-col lg:flex-row justify-between mt-[60px] lg:mt-[114px]">
                <section>
                  <h3 className="text-[32px] lg:text-[48px] text-center lg:text-left font-bold text-[#181818]">Let’s work together</h3>
                  <p className="text-[15px] lg:text-[20px] w-full lg:max-w-[48%] text-center lg:text-left mt-[8px]">Want to discuss an opportunity to create something great? I’m ready when you are.</p>
                </section>
                <div className="flex items-center w-full lg:w-[201px] mt-[34px] lg:mt-0">
                  <button className="bg-gradient-to-r from-black to-black w-full py-[16px] px-[32px] rounded-[9px] text-white"> Get in touch</button>
                </div>
            </section>
          </section>
          <Footer />
    </main>
  )
}

export default Home
