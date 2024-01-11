import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Contact = () => {
  return (
    <main className="text-[#808080]">
        <div className="bg-[url('/assets/background-gradient-top.png')] bg-center w-full flex flex-col">
           <section className="px-[18px] lg:px-[244px]">
                <Navbar />
           </section>
            <section className="flex justify-center mb-[86px] mt-[32px] lg:hidden">
              <img src="/assets/favour-logo-white.svg" alt="" />
            </section>
            <section className="px-[16px] lg:px-[244px] lg:mt-[121px]">
                <h2 className="text-[48px] lg:text-[70px] font-extrabold text-[#181818]">Get in touch</h2>
                <p className="text-[15px] lg:text-[24px] font-normal">Let’s build something awesome.</p>
            </section>
            <hr className="w-full text-black opacity-10 mt-[60px]"/>
        </div>
        <Footer />
    </main>
  )
}

export default Contact