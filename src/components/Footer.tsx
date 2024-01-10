import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="w-full bg-[url('/assets/background-gradient-bottom.png')] bg-center h-[550px] flex justify-center items-end mt-[350px] lg:mt-0">
        <div className="w-full lg:w-[68%] flex flex-col-reverse lg:flex-row justify-between py-[32px] px-[16px] lg:px-6">
            <div className="flex flex-col">
            <img src="/assets/thanks.png" alt="" />
            <p className="mt-[48px] lg:mt-[93px]"> ©️2024 Akinnuli Favour. All rights reserved</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-[40px] lg:gap-[120px] mb-[48px] lg:mb-0">
            <div>
                <h4 className="mb-[32px] text-[16px] font-bold text-[#181818]">Links</h4>
                <ul className="flex flex-col gap-[16px] text-[16px] font-normal text-[#181818]">
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="mb-[32px] text-[16px] font-bold text-[#181818]">Elsewhere</h4>
                <ul className="flex flex-col gap-[16px] text-[16px] font-normal text-[#181818]">
                <li>Email</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Discord</li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
