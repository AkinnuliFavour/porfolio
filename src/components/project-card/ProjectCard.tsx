import { useEffect, useRef, useState } from "react";
import BrowserPreview from "./BrowserPreview";
import TechStack from "./TechStack";
import ProjectActions from "./ProjectActions";

export interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  screenshots: string[];
  tags: string[];
  github?: string;
  /** Stagger the entry animation by this many milliseconds */
  animationDelay?: number;
}

const ProjectCard = ({
  name,
  description,
  url,
  screenshots,
  tags,
  github,
  animationDelay = 0,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        if (inView && !hasAnimatedIn) {
          // Respect animation delay for stagger effect
          const timer = setTimeout(
            () => setHasAnimatedIn(true),
            animationDelay
          );
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animationDelay, hasAnimatedIn]);

  const shouldAnimate = !prefersReducedMotion.current;

  return (
    <article
      ref={cardRef}
      aria-label={`${name} project`}
      className="group relative bg-white border border-[#e8e8e8] rounded-[20px] overflow-hidden"
      style={{
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04)",
        /* Entry animation */
        opacity: shouldAnimate ? (hasAnimatedIn ? 1 : 0) : 1,
        transform: shouldAnimate
          ? hasAnimatedIn
            ? "translateY(0px)"
            : "translateY(28px)"
          : "none",
        transition: shouldAnimate
          ? "opacity 0.55s ease-out, transform 0.55s ease-out, box-shadow 0.25s ease-out"
          : "box-shadow 0.25s ease-out",
        willChange: "opacity, transform",
      }}
      /* Hover effects applied via CSS — see onMouseEnter/Leave for dynamic shadow */
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 24px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)";
        if (shouldAnimate) {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.04)";
        if (shouldAnimate) {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0px)";
        }
      }}
    >
      {/* ── Browser Preview ── */}
      <BrowserPreview
        screenshots={screenshots}
        projectName={name}
        url={url}
        isActive={isInView}
      />

      {/* ── Card Body ── */}
      <div className="p-5 flex flex-col">
        {/* Project name */}
        <h3 className="text-[#181818] text-[17px] font-bold leading-snug tracking-tight">
          {name}
        </h3>

        {/* Description — 3-line clamp */}
        <p className="text-[#777] text-[13px] leading-[1.65] mt-2 line-clamp-3">
          {description}
        </p>

        {/* Tech badges */}
        <TechStack tags={tags} />

        {/* Action buttons */}
        <ProjectActions liveUrl={url} github={github} projectName={name} />
      </div>
    </article>
  );
};

export default ProjectCard;
