import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] px-4 mt-4 bg-white bg-opacity-25 hidden lg:flex justify-between text-lg font-medium rounded-xl">
      <ul className="flex items-center gap-[40px]">
        <ActiveLink to="/">
          <img
            src="/assets/favour-logo-black.svg"
            alt=""
            className="w-[39.87px] h-[26px] text-black hover:scale-110"
          />
        </ActiveLink>
        <li>
          <ActiveLink
            to="/about"
          >
            About
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            to="/projects"
          >
            Projects
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            to="/contact"
          >
            Contact
          </ActiveLink>
        </li>
      </ul>
      <div className="flex items-center gap-[24px] drop-shadow-2xl">
        <Link
          to="https://www.linkedin.com/in/oluwasemilore-akinnuli-921a2124b"
          target="_blank"
          className="drop-shadow-2xl"
        >
          <img src="/assets/LinkedIn.png" className="hover:scale-110 text-[#808080]" alt="" />
        </Link>
        {/* <img src="/assets/X.png" alt="" /> */}
        <Link
          to="https://github.com/AkinnuliFavour"
          target="_blank"
          className="drop-shadow-2xl"
        >
          <img src="/assets/Github.svg" className="hover:scale-110 text-[#808080]" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
