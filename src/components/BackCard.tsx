import { BackCardTag } from "./BackCardTag";

interface BackCardProps {
  screenshot: string;
  tags: string[];
}

const BackCard = ({ screenshot, tags }: BackCardProps) => {
  return (
    <div
      className={`w-full h-full bg-contain bg-no-repeat rounded-3xl`}
      style={{ backgroundImage: `url(${screenshot})` }}
    >
      <div className="bg-black px-20 h-full w-full bg-opacity-80 text-[#999] font-bold flex justify-center items-center">
        <div
          className="w-4/5 h- flex justify-center items-center gap-10 flex-wrap opacity-100"
          style={{ opacity: 1 }}
        >
          {tags.map((tag) => (
            <BackCardTag tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackCard;
