const Home = () => {
  return (
    <>
      <div className="max-w-screen h-screen relative">
        <div className="w-1/3 h-[138.12px] left-[42%] top-[-61.85px] absolute bg-yellow-500 bg-opacity-40 rounded-full blur-[150px]" />
        <div className="w-1/3 h-[263.34px] left-[30.8%] top-[-82.85px] absolute bg-red-500 bg-opacity-40 rounded-full blur-[150px]" />
        <div className="w-1/3 h-[178.63px] left-[15.3%] top-[-61.95px] absolute bg-blue-600 bg-opacity-40 rounded-full blur-[150px]" />
      </div>
    <main className="absolute top-0 w-screen text-[#808080]">
         <nav className="w-4/6 h-[60px] px-4 mt-4 bg-white opacity-25 flex justify-between place-self-center relative left-[15%] text-lg font-medium rounded-xl">
          <ul className="flex items-center gap-[40px] text-[#3F64EA] text-opacity-[43%]">
            <li>About</li>
            <li>Contact</li>
            <li>Tech Stack</li>
          </ul>
          <div className="flex items-center gap-[24px]">
            <img src="/assets/LinkedIn.png" alt="" />
            <img src="/assets/X.png" alt="" />
            <img src="/assets/Github.svg" alt="" />
          </div>
         </nav>
         <section className="mt-[130px] md:ml-[244px]">
          <section>
            <h2 className="text-[80px] font-extrabold">I'm <span className="text-[#181818]">Akinnuli Favour</span></h2>
            <p className="text-[24px] w-[729px] mt-[30px]">A front-end engineer helping startups turn their visions into a digital reality. I specialize in building modern mobile and web-based apps.</p>
            <div className="mt-[30px]">
              <button className="bg-gradient-to-r from-black to-black text-white px-[32px] py-[16px] rounded-[9px] mr-[16px]">See my resume</button>
              <button className="bg-[#F3F3F3] text-[#181818] px-[32px] py-[16px] rounded-[9px]">Get in touch</button>
            </div>
          </section>
          <section>
            <img src="" alt="" />
          </section>
         </section>
    </main>
    </>
  )
}

export default Home
