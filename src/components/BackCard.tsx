import { BackCardTag } from "./BackCardTag";

interface BackCardProps {
  screenshot: string;
  tags: string[];
  isHovered: boolean;
}

const BackCard = ({ tags, isHovered }: BackCardProps) => {
  return (

    <div className={`absolute bg-black rounded-[32px] px-20 h-96 w-full bg-opacity-80 text-[#999] font-bold flex justify-center items-center shadow-md shadow-gray-500 transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
      <div
        className="w-4/5 h- flex justify-center items-center gap-10 flex-wrap opacity-100"
        style={{ opacity: 1 }}
      >
        {tags.map((tag) => (
          <BackCardTag tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default BackCard;
