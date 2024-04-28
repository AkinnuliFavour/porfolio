export const BackCardTag = ({ tag }: { tag: string }) => {
  return (
    <div className="px-2 bg-[#313131] border border-1 border-solid rounded-[3px] border-[#222] opacity-100 flex items-center justify-center shadow-lg shadow-black">
      {tag}
    </div>
  );
};
