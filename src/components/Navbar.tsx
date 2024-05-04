import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] px-4 mt-4 bg-white opacity-25 hidden lg:flex justify-between text-lg font-medium rounded-xl">
      <ul className="flex items-center gap-[40px] ">
        <Link to="/">
          <img
            src="/assets/favour-logo-black.svg"
            alt=""
            className="w-[39.87px] h-[26px] text-black"
          />
        </Link>
        <li>
          <Link to="/about" className="hover:text-blue-800 drop-shadow-2xl">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-800 drop-shadow-2xl">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-800 drop-shadow-2xl">
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
          <img src="/assets/LinkedIn.png" alt="" />
        </Link>
        {/* <img src="/assets/X.png" alt="" /> */}
        <Link
          to="https://github.com/AkinnuliFavour"
          target="_blank"
          className="drop-shadow-2xl"
        >
          <img src="/assets/Github.svg" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
