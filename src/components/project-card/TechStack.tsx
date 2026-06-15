interface TechStackProps {
  tags: string[];
}

const TechStack = ({ tags }: TechStackProps) => {
  return (
    <div
      className="flex flex-wrap gap-1.5 mt-4"
      role="list"
      aria-label="Technologies used"
    >
      {tags.map((tag, i) => (
        <span
          key={`${tag}-${i}`}
          role="listitem"
          className="
            px-2.5 py-1
            bg-[#f5f5f5] text-[#444]
            border border-[#eaeaea]
            rounded-full
            text-[11px] font-medium tracking-wide
            transition-all duration-200 ease-out
            hover:bg-[#181818] hover:text-white hover:border-[#181818]
            cursor-default select-none
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
