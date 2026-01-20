import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 1024);

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const card = (
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
  );

  return (
    <div className="w-full" data-aos="zoom-in">
      {isMobile ? (
        <>
          {card}
          <div className="flex justify-end pb-5 lg:pb-0">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold text-text-primary bg-white border border-text-primary/15 rounded-xl shadow-sm transition-all hover:-translate-y-[1px] hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary"
            >
              Visit live site
              <span aria-hidden>↗</span>
            </a>
          </div>
        </>
      ) : (
        <Link
          to={url}
          target="_blank"
          className="block group outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary rounded-3xl transition-all duration-300"
        >
          {card}
        </Link>
      )}
    </div>
  );
};

export default Card;
