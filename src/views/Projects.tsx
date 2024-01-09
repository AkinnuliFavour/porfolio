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
    </main>
  )
}

export default Projects
