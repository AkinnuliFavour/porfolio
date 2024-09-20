import { Link } from "react-router-dom";
import FrontCard from "./FrontCard";
// import { NewFrontCard } from "./FrontCard";
import BackCard from "./BackCard";

interface CardProps {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  logo: string;
  screenshot: string;
  tags: string[];
}

const Card = ({
  name,
  description,
  url,
  imageUrl,
  logo,
  screenshot,
  tags,
}: CardProps) => {
  return (
    <Link
      to={url}
      target="_blank"
      className="w-full min-h-full bg-[#F6F6F6] rounded-3xl"
      data-aos="zoom-in"
    >
      <div className="cursor-pointer group rounded-[32px] max-w-[1000px] h-[480px] mb-20">
        <div className="relative h-full w-full ">
          <div className="w-full h-full absolute rounded-3xl overflow-hidden">
            <FrontCard
              name={name}
              description={description}
              imageUrl={imageUrl}
              logo={logo}
              screenshot={screenshot}
              tags={tags}
            />
            {/* <NewFrontCard name={name} description={description} imageUrl={imageUrl} logo={logo} /> */}
          </div>
          {/* <div className="absolute rotate-y-180 w-full h-full bg-opacity-95 rounded-3xl overflow-hidden text-neutral-300 space-y-5 backface-hidden">
            <BackCard screenshot={screenshot} tags={tags} />
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
