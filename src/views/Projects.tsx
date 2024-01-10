import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Projects = () => {
  return (
    <main className="text-[#808080]">
        <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full flex flex-col">
           <section className="px-[18px] lg:px-[244px]">
                <Navbar />
           </section>
            <section className="flex justify-center mb-[86px] mt-[32px] lg:hidden">
              <img src="/assets/logo-white.png" alt="" />
            </section>
            <section className="px-[16px] lg:px-[244px] lg:mt-[121px]">
                <h2 className="text-[48px] lg:text-[70px] font-extrabold text-[#181818]">Projects</h2>
                <p className="text-[15px] lg:text-[24px] font-normal">Projects and ideas I’ve worked on</p>
            </section>
            <hr className="w-full text-black opacity-10 mt-[60px]"/>
        </div>
        <section className="px-[18px] lg:px-[244px] mt-[60px]">
            <section className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 mb-[32px] rounded-[32px]">
                <div className="py-8">
                    <div className="mb-[16px]"><img src="/assets/Logo.png" alt="" /></div>
                    <div className="">
                    <p className="text-[#181818] text-[32px] font-bold mb-[16px]">Subbi</p>
                    <p className="text-[16px] font-normal">Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                    </div>
                </div>
                <div>
                    <img src="/assets/Subbi.png" alt="" className="hidden lg:block"/>
                </div>
            </section>

            <section className=" bg-[#F6F6F6] px-6 w-full grid grid-cols-1 lg:grid-cols-2 mb-[32px] rounded-[32px]">
                <div className="py-8">
                    <div className="mb-[16px]"><img src="/assets/React.png" alt="" /></div>
                    <div>
                    <p className="text-[#181818] text-[32px] font-bold mb-[16px]">React Documentation</p>
                    <p className="text-[16px] font-normal">With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.</p>
                    </div>
                </div>
                <div>
                    <img src="/assets/React Docs.png" alt="" className="hidden lg:block"/>
                </div>
            </section>

            <section className=" bg-[#F6F6F6] px-6 w-full h-[565px] flex flex-col justify-center items-center lg:grid-cols-2 mb-[32px] rounded-[32px] ">
                <img src="/assets/Stars.png" alt="" />
                <h3 className="text-[#181818] text-[20px] text-center lg:text-[32px] font-bold mt-[11px]">YOUR PROJECT GOES HERE</h3>
                <p className="text-[16px] font-normal mt-[16px] text-center">Let’s turn your idea into a visual reality</p>
                <div className="flex items-center w-full lg:w-[201px] mt-[34px] lg:mt-[90px]">
                  <button className="bg-gradient-to-r from-black to-black w-full py-[16px] px-[32px] rounded-[9px] text-white"> Get in touch</button>
                </div>
            </section>
        </section>
        <Footer />
    </main>
  )
}

export default Projects
