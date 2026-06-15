import { useEffect, useRef, useState } from "react";

interface ScreenshotCarouselProps {
  screenshots: string[];
  projectName: string;
  isActive: boolean;
}

const CYCLE_INTERVAL_MS = 4000;
const TRANSITION_DURATION_MS = 700;

const ScreenshotCarousel = ({
  screenshots,
  projectName,
  isActive,
}: ScreenshotCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const clearCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startCarousel = () => {
    if (screenshots.length <= 1 || prefersReducedMotion.current) return;
    clearCarousel();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, CYCLE_INTERVAL_MS);
  };

  useEffect(() => {
    if (isActive) {
      startCarousel();
    } else {
      clearCarousel();
    }
    return clearCarousel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, screenshots.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    // Restart the interval so it doesn't immediately advance
    startCarousel();
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-[#e8e8e8]"
      role="region"
      aria-label={`${projectName} screenshots`}
      aria-live="polite"
    >
      {screenshots.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt={i === currentIndex ? `${projectName} screenshot` : ""}
          loading="lazy"
          aria-hidden={i !== currentIndex}
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{
            opacity: i === currentIndex ? 1 : 0,
            transform: i === currentIndex ? "scale(1)" : "scale(1.04)",
            transition: prefersReducedMotion.current
              ? "none"
              : `opacity ${TRANSITION_DURATION_MS}ms ease-in-out, transform ${TRANSITION_DURATION_MS}ms ease-in-out`,
            willChange: "opacity, transform",
          }}
        />
      ))}

      {/* Dot indicators — only shown when there are multiple unique screenshots */}
      {screenshots.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10"
          aria-label="Screenshot navigation"
        >
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`View screenshot ${i + 1} of ${screenshots.length}`}
              aria-current={i === currentIndex ? "true" : undefined}
              className="rounded-full bg-white/70 backdrop-blur-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                width: i === currentIndex ? "16px" : "6px",
                height: "6px",
                opacity: i === currentIndex ? 1 : 0.55,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScreenshotCarousel;
