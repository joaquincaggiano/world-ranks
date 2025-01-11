"use client";

interface CardCountryInfoProps {
  title: string;
  value: string;
}

const CardCountryInfo = ({ title, value }: CardCountryInfoProps) => {
  return (
    <div className="flex justify-between items-center p-5 border-[1px] border-dark2 font-medium">
      <p className="text-sm">{title}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default CardCountryInfo;
