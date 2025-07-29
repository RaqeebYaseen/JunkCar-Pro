import Image from "next/image";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="mb-4">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-xs text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
