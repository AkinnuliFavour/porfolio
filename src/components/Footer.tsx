import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-[url('/assets/background-gradient-bottom.png')] bg-center h-[550px] flex justify-center items-end mt-[350px] lg:mt-0">
      <div className="w-full lg:w-[68%] flex flex-col-reverse lg:flex-row justify-between py-[32px] px-[16px] lg:px-6">
        <div className="flex flex-col">
          <img
            src="/assets/favour-logo-black.svg"
            alt=""
            className="h-[60px] w-[90px]"
          />
          <p className="text-black text-[14px] font-medium mt-[16px]">
            Thanks for stopping by ッ
          </p>
          <p className="mt-[48px] lg:mt-[93px]">
            {" "}
            ©️2024 Akinnuli Favour. All rights reserved
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-[40px] lg:gap-[120px] mb-[48px] lg:mb-0">
          <div>
            <h4 className="mb-[32px] text-[16px] font-bold text-[#181818]">
              Links
            </h4>
            <ul className="flex flex-col gap-[16px] text-[16px] font-normal text-[#181818]">
              <li>
                <Link
                  to="/about"
                  className="hover:bg-gradient-to-r from-[#333399] to-[#FF00CC] hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:bg-gradient-to-r from-[#333399] to-[#FF00CC] hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:bg-gradient-to-r from-[#333399] to-[#FF00CC] hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-[32px] text-[16px] font-bold text-[#181818]">
              Elsewhere
            </h4>
            <ul className="flex flex-col gap-[16px] text-[16px] font-normal text-[#181818]">
              <li>
                <Link
                  to="mailto: oluwasemiloreakinnuli@gmail.com"
                  className="hover:bg-gradient-to-r from-[#333399] to-[#FF00CC] hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/oluwasemilore-akinnuli-921a2124b"
                  className="hover:bg-gradient-to-r from-[#333399] to-[#FF00CC] hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/AkinnuliFavour"
                  className="hover:bg-gradient-to-r from-[#333399] to-[#FF00CC] hover:text-transparent hover:bg-clip-text drop-shadow-2xl"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
