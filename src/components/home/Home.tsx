import { Country } from "@/interfaces/country";
import SearchSvg from "../icons/SearchSvg";

interface Props {
  countries: Country[];
}
const Home = ({ countries }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {/* {countries.map((country: Country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))} */}

      <div className="flex justify-between items-center mb-5">
        <span className="text-white text-base font-medium">
          Found {countries.length} countries
        </span>

        <div className="flex items-center gap-2 bg-dark2 rounded-xl p-2">
          <SearchSvg color="#FFFFFF" />
          <input
            type="text"
            placeholder="Search by name, region or subregion"
            className="bg-transparent outline-none font-medium text-sm w-[300px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 w-full">
        <div className="flex flex-col gap-8 w-full">
          {/* Sort by name, population or area */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-white text-xs font-medium">Sort by</span>
            <select className="bg-transparent border-2 border-dark2 rounded-xl p-2 font-medium text-sm w-full max-w-[250px]">
              <option value="name">Name</option>
              <option value="population">Population</option>
              <option value="area">Area</option>
            </select>
          </div>

          {/* Region */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-white text-xs font-medium">Region</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
