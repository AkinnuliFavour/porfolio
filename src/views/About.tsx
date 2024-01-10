import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const About = () => {
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
                <h2 className="text-[48px] lg:text-[70px] font-extrabold text-[#181818]">A little bit about me</h2>
                <p className="text-[15px] lg:text-[24px] font-normal">Who am I and what do I do?</p>
            </section>
            <hr className="w-full text-black opacity-10 mt-[60px]"/>
       </div>
        <section className="px-[18px] lg:px-[244px] mt-[60px] flex items-center gap-[75px]">
            <section className="">
                <h3 className="text-[16px] font-semibold text-[#181818]">Who I am</h3>
                <p className="text-[15px] mt-[9px]">I'm <span className="text-[#181818]">Favour</span>, a multi-disciplinary front-end engineer based in Akure, Nigeria.</p>
                <h3 className="text-[16px] font-semibold text-[#181818] mt-[32px]">What I Do</h3>
                <p className="text-[15px] mt-[9px]">With two years of invaluable experience in my role at Harmony Technology –– a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications that directly impact the lives of Moroccan citizens.</p>
                <h3 className="text-[16px] font-semibold text-[#181818] mt-[32px]">What I Did</h3>
                <p className="text-[15px] mt-[9px]">Before delving into the realm of front end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles. It enables me to seamlessly blend functionality and visual appeal in every project I undertake.</p>
                <p className="text-[18px] mt-[60px]">Feel free to reach out via e-mail, or follow me on Twitter. Want to see where I’ve worked? Check out my Resume, or Connect with me on LinkedIn.</p>
            </section>
            {/* <section>
                <img src="" alt="" />
                <button>Get in touch</button>
            </section> */}
        </section>
        <Footer />
    </main>
  )
}

export default About
