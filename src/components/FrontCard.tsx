import { useState } from "react";
import BackCard from "./BackCard";

interface FrontCardProps {
  name: string;
  description: string;
  logo: string;
  screenshot: string;
  tags: string[];
}

const FrontCard = ({
  name,
  description,
  logo,
  screenshot,
  tags,
}: FrontCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile] = useState(window.innerWidth < 1024);

  const handleMouseEnter = () => {
    if (!isMobile) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsFlipped(false);
  };

  const handleTouchToggle = () => {
    if (isMobile) setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-full bg-bg-light bg-cover bg-top transition-all duration-500 ease-in-out relative overflow-hidden group"
      style={{
        backgroundImage: isFlipped
          ? `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%), url(${screenshot})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouchToggle}
      role="button"
      tabIndex={0}
      aria-label={`${name} project card, click to view tech stack`}
    >
      {/* Front Content */}
      <div
        className={`absolute inset-0 p-8 lg:p-12 flex flex-col justify-start transition-all duration-500 ease-in-out ${
          isFlipped
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        <div className="mb-4 lg:mb-6">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-16 lg:h-20 object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col justify-start">
          <h3 className="text-text-primary text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
            {name}
          </h3>
          <p className="text-text-secondary text-sm lg:text-base leading-relaxed line-clamp-4 lg:line-clamp-none">
            {description}
          </p>
        </div>
        {/* Mobile indicator */}
        <div className="lg:hidden mt-4 text-xs text-text-secondary opacity-60">
          Tap to view tech stack
        </div>
      </div>

      {/* Back Content (Tech Stack) */}
      <BackCard tags={tags} isFlipped={isFlipped} />
    </div>
  );
};

export default FrontCard;
