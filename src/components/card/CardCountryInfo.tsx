"use client";

interface CardCountryInfoProps {
  title: string;
  value: string;
}

const CardCountryInfo = ({ title, value }: CardCountryInfoProps) => {
  return (
    <div className="flex justify-between items-center p-5 border-[1px] border-dark2">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-sm font-normal">{value}</p>
    </div>
  );
};

export default CardCountryInfo;
