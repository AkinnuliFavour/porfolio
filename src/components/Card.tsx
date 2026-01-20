import { Link } from "react-router-dom";
import FrontCard from "./FrontCard";

interface CardProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  screenshot: string;
  tags: string[];
}

const Card = ({
  name,
  description,
  url,
  logo,
  screenshot,
  tags,
}: CardProps) => {
  return (
    <Link
      to={url}
      target="_blank"
      className="w-full group outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary rounded-3xl transition-all duration-300"
      data-aos="zoom-in"
    >
      <div className="cursor-pointer rounded-3xl w-full h-80 lg:h-96 mb-8 lg:mb-10 overflow-hidden transition-all duration-300 hover:shadow-card-hover shadow-card-default">
        <div className="relative h-full w-full">
          <FrontCard
            name={name}
            description={description}
            logo={logo}
            screenshot={screenshot}
            tags={tags}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
