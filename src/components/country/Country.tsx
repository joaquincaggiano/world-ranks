"use client";

import { Country } from "@prisma/client";
import Image from "next/image";
import CardCountryInfo from "../card/CardCountryInfo";

interface Props {
  country: Country;
}
const CountryDetail = ({ country }: Props) => {
  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2">
        <Image
          src={country.flag}
          alt={country.name}
          width={250}
          height={250}
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        {/* Country Name */}
        <div className="flex flex-col justify-center items-center gap-2 mt-[120px]">
          <h1 className="text-2xl font-bold">{country.name}</h1>
          <p className="text-sm text-gray-500">{country.region}</p>
        </div>

        {/* Popualtion and Area */}
        <div className="flex justify-center items-center gap-5 text-lightGray">
          <div className="flex items-center gap-5 rounded-xl bg-dark2 p-3">
            <p className="text-sm font-normal">Population</p>
            <div className="w-[2px] h-[30px] bg-dark" />
            <p className="text-sm font-medium">
              {country.population.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-5 rounded-xl bg-dark2 p-3">
            <p className="text-sm font-normal">Area (km²)</p>
            <div className="w-[2px] h-[30px] bg-dark" />
            <p className="text-sm font-medium">
              {country.area.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[50%] text-lightGray">
          <CardCountryInfo title="Subregion" value={country.subregion} />
          <CardCountryInfo title="Language" value={country.languages.join(", ")} />
          <CardCountryInfo title="Currencies" value={country.currencies.join(", ")} />

          <div className="flex flex-col gap-5 p-5 border-[1px] border-gray font-medium">
            <p className="text-sm font-normal">Neighbouring Countries</p>
            <div className="flex flex-col gap-2 justify-center items-center">
                {country.borders.map((border) => (
                    <p key={border} className="text-sm font-medium">
                        {border}
                    </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
