const Home = () => {
  return (
    <>
      <div className="w-screen h-screen relative">
        <div className="w-[598.25px] h-[138.12px] left-[643.90px] top-[-61.85px] absolute bg-yellow-500 bg-opacity-40 rounded-full blur-[150px]" />
        <div className="w-[598.25px] h-[263.34px] left-[465.05px] top-[-82.85px] absolute bg-red-500 bg-opacity-40 rounded-full blur-[150px]" />
        <div className="w-[598.25px] h-[178.63px] left-[230.77px] top-[-61.95px] absolute bg-blue-600 bg-opacity-40 rounded-full blur-[150px]" />
      </div>
    <main className="absolute top-0 w-screen">
         <nav className="w-4/6 h-[60px] bg-[#18181] flex justify-center">
          <ul className="flex justify-around">
            <li>About</li>
            <li>Contact</li>
            <li>Tech Stack</li>
          </ul>
          <div>

          </div>
         </nav>
    </main>
    </>
  )
}

export default Home
