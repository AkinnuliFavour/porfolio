interface FrontCardProps {
  name: string;
  description: string;
  imageUrl: string;
  logo: string;
}

const FrontCard = ({ name, description, imageUrl, logo }: FrontCardProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between mb-[32px] rounded-[32px] bg-[#F6F6F6] px-10">
      <div className="py-8">
        <div className="mb-[16px]">
          <img src={logo} alt="" className="w-24" />
        </div>
        <div>
          <p className="text-[#181818] text-[32px] font-bold mb-[16px]">
            {name}
          </p>
          <p className="text-[16px] font-normal">{description}</p>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <img src={imageUrl} alt="" className="hidden lg:block w-72" />
      </div>
    </div>
  );
};

export default FrontCard;
