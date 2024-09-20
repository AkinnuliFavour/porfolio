import { useState } from "react";
import BackCard from "./BackCard";

interface FrontCardProps {
  name: string;
  description: string;

  logo: string;
  screenshot: string;
  tags: string[];
}

// const NewFrontCard = ({ name, description, imageUrl, logo }: FrontCardProps) => {
//   return (
//     <div className="bg-red-400 w-full">

//     </div>
//   )
// }

const FrontCard = ({ name, description, logo, screenshot, tags }: FrontCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const normalStyle = "bg-[#F9F9F9] shadow-lg";
  return (
    <div
      className={`w-full h-full lg:h-96 mb-[32px] rounded-[32px] px-10 bg-cover  bg-top transition-all duration-300 ease-in-out ${!isHovered && normalStyle}`}
      style={{ backgroundImage: isHovered ? `url(${screenshot})` : '' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relaive h-full flex items-center justify-center">
        <div className={`absolute p-10 lg:p-24 h-full transition-all duration-300 ease-in-out ${isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
          <div className="mb-[16px]">
            <img src={logo} alt="" className="w-24" />
          </div>
          <div>
            <p className="text-[#181818] text-[32px] font-bold mb-[16px]">
              {name}
            </p>
            <p className="text-[16px] font-normal">{description}</p>
          </div>
        </div>
        <BackCard screenshot={screenshot} tags={tags} isHovered={isHovered} />
      </div>
      {/* <div className="flex justify-center py-8">
        <img src={imageUrl} alt="" className="hidden lg:block w-72" />
      </div> */}
    </div>
  );
};

export default FrontCard;
// export { NewFrontCard };
