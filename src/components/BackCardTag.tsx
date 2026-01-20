export const BackCardTag = ({ tag }: { tag: string }) => {
  return (
    <div className="px-3 lg:px-4 py-1.5 lg:py-2 bg-tag-bg border border-tag-border rounded-md lg:rounded-lg text-white text-xs lg:text-sm font-medium flex items-center justify-center shadow-tag hover:bg-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-opacity-90">
      {tag}
    </div>
  );
};
