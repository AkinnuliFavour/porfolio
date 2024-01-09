const Navbar = () => {
  return (
    <nav className="w-full h-[60px] px-4 mt-4 bg-white opacity-25 hidden lg:flex justify-between text-lg font-medium rounded-xl">
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
  )
}

export default Navbar
