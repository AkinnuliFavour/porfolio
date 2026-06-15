import ScreenshotCarousel from "./ScreenshotCarousel";

interface BrowserPreviewProps {
  screenshots: string[];
  projectName: string;
  url: string;
  isActive: boolean;
}

/** Strip protocol so the URL bar looks realistic */
const formatDisplayUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const BrowserPreview = ({
  screenshots,
  projectName,
  url,
  isActive,
}: BrowserPreviewProps) => {
  const displayUrl = formatDisplayUrl(url);

  return (
    <div className="overflow-hidden border-b border-[#e8e8e8]">
      {/* ── Browser Chrome Bar ── */}
      <div className="bg-[#f3f3f3] px-4 py-[10px] flex items-center gap-3 border-b border-[#e0e0e0]">
        {/* Window control dots */}
        <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
          <span className="block w-[11px] h-[11px] rounded-full bg-[#ff5f57] shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.15)]" />
          <span className="block w-[11px] h-[11px] rounded-full bg-[#febc2e] shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.15)]" />
          <span className="block w-[11px] h-[11px] rounded-full bg-[#28c840] shadow-[inset_0_0.5px_1px_rgba(0,0,0,0.15)]" />
        </div>

        {/* URL / address bar */}
        <div
          className="flex-1 min-w-0 bg-[#e8e8e8] rounded-full px-4 py-[5px] flex items-center gap-1.5"
          aria-label={`URL: ${url}`}
        >
          {/* Lock icon */}
          <svg
            width="9"
            height="10"
            viewBox="0 0 12 14"
            fill="none"
            className="text-[#888] shrink-0"
            aria-hidden="true"
          >
            <rect x="1" y="6" width="10" height="7" rx="1.5" fill="currentColor" opacity="0.7" />
            <path
              d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
          <span className="text-[#888] text-[11px] truncate leading-none">
            {displayUrl}
          </span>
        </div>

        {/* Spacer to balance the dots on the left */}
        <div className="w-[44px] shrink-0" aria-hidden="true" />
      </div>

      {/* ── Screenshot Carousel ── */}
      <div className="h-[215px]">
        <ScreenshotCarousel
          screenshots={screenshots}
          projectName={projectName}
          isActive={isActive}
        />
      </div>
    </div>
  );
};

export default BrowserPreview;
