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
        <section className="px-[16px] lg:px-[244px]">
          <section className="mt-[60px] bg-[#F6F6F6] shadow-xl rounded-[12px]">
            <div className="flex justify-center py-[18px] border-b border-b-[rgba(255, 255, 255, 0.25)]">
              <h3 className="text-[16px] font-medium text-[#181818]">New Message</h3>
            </div>
            <form action="" className="px-[16px] lg:px-[32px] py-[10px]">
              <div className="h-[35px] mb-[16px] flex items-center">
                <label htmlFor="email" className="text-[14px] font-medium text-[#181818]">Email:</label>
                <input type="email" name="" id="email" placeholder="Enter your email address" className="w-full ml-[8px] bg-[#F6F6F6] outline-none text-[14px]"/>
              </div>

              <div className="h-[35px] mb-[16px] flex items-center">
                <label htmlFor="name" className="text-[14px] font-medium text-[#181818]">Name:</label>
                <input type="text" name="" id="name" placeholder="Enter your name" className="w-full ml-[8px] bg-[#F6F6F6] outline-none text-[14px]"/>
              </div>

              <div className="h-[35px] mb-[32px] flex items-center">
                <label htmlFor="subject" className="text-[14px] font-medium text-[#181818]">Subject:</label>
                <input type="text" name="" id="subject" placeholder="Enter subject" className="w-full ml-[8px] bg-[#F6F6F6] outline-none text-[14px]"/>
              </div>

              <hr />

              <textarea name="" id="" cols={30} rows={10} placeholder="Write your message here" className="w-full p-[24px] bg-[#F3F3F3] mt-[32px] rounded-[12px] resize-none outline-none text-[14px]"></textarea>

              <div className="flex justify-center lg:justify-end py-[16px]">
                <button className="w-full py-[16px] lg:px-12 bg-gradient-to-l from-black to-black text-white rounded-[9px]">Send</button>
              </div>
            </form>
          </section>
        </section>
        <Footer />
    </main>
  )
}

export default Contact