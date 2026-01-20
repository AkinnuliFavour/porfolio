import { BackCardTag } from "./BackCardTag";

interface BackCardProps {
  tags: string[];
  isFlipped: boolean;
}

const BackCard = ({ tags, isFlipped }: BackCardProps) => {
  return (
    <div
      className={`absolute inset-0 bg-black/10 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        isFlipped
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="text-center mb-6 lg:mb-8">
        <h4 className="text-white text-sm lg:text-base font-semibold tracking-wide uppercase opacity-70">
          Technology Stack
        </h4>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 px-6 lg:px-8 max-w-full">
        {tags.map((tag, index) => (
          <BackCardTag key={`${tag}-${index}`} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default BackCard;
