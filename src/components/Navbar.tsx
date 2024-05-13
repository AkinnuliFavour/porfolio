import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] px-4 mt-4 bg-white opacity-25 hidden lg:flex justify-between text-lg font-medium rounded-xl">
      <ul className="flex items-center gap-[40px] ">
        <Link to="/">
          <img
            src="/assets/favour-logo-black.svg"
            alt=""
            className="w-[39.87px] h-[26px] text-black hover:scale-110"
          />
        </Link>
        <li>
          <Link
            to="/about"
            className="hover:bg-gradient-to-r from-cyan-500 to-orange-400 hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:bg-gradient-to-r from-cyan-500 to-orange-400 hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:bg-gradient-to-r from-cyan-500 to-orange-400 hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-[24px] drop-shadow-2xl">
        <Link
          to="https://www.linkedin.com/in/oluwasemilore-akinnuli-921a2124b"
          target="_blank"
          className="drop-shadow-2xl"
        >
          <img src="/assets/LinkedIn.png" className="hover:scale-110" alt="" />
        </Link>
        {/* <img src="/assets/X.png" alt="" /> */}
        <Link
          to="https://github.com/AkinnuliFavour"
          target="_blank"
          className="drop-shadow-2xl"
        >
          <img src="/assets/Github.svg" className="hover:scale-110" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
