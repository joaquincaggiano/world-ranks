"use client";
import SearchSvg from "../icons/SearchSvg";
import { Country } from "@/interfaces/country";
import Table from "../table/Table";
import Image from "next/image";
import Pagination from "../pagination/Pagination";
import { useSearchParams } from "next/navigation";

interface Props {
  countries: Country[];
  totalCountries: number;
  totalPages: number;
}

const Home = ({ countries, totalCountries, totalPages }: Props) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "all";

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [countries, setCountries] = useState<Country[]>(initialCountries);
  // const [totalCountries, setTotalCountries] = useState<number>(
  //   initialTotalCountries
  // );
  // const [totalPages, setTotalPages] = useState<number>(initialTotalPages);
  // const [page, setPage] = useState<number>(1);
  // const [search, setSearch] = useState<string>("all");
  // const [regionsSelected, setRegionsSelected] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       setIsLoading(true);
  //       const countries = await getCountries(search);
  //       setCountries(countries);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchCountries();
  // }, [search]);

  // const handleRegionClick = async (region: string) => {
  //   try {
  //     setIsLoading(true);
  //     if (regionsSelected.includes(region)) {
  //       setRegionsSelected(regionsSelected.filter((r) => r !== region));
  //       setCountries(countries.filter((country) => country.region !== region));
  //     } else {
  //       const response: CountriesResponse = await getCountries(
  //         `region/${region}`
  //       );
  //       const { countries: newCountries, totalCountries: newTotalCountries } =
  //         response;
  //       if (newCountries.length > 0) {
  //         setRegionsSelected([...regionsSelected, region]);
  //         setCountries((prevCountries) => [...prevCountries, ...newCountries]);
  //         setTotalCountries(newTotalCountries);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error handling region click:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="flex flex-col w-full">
      {/* Total countries and search */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-white text-base font-medium">
          Found {totalCountries} countries
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

      {/* Sort by name, population or area */}
      <div className="flex gap-5 w-full">
        <div className="flex flex-col gap-8 w-full max-w-[300px]">
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
          {/* <div className="flex flex-col gap-2 w-full max-w-[250px]">
            <span className="text-white text-xs font-medium">Region</span>
            <div className="flex flex-wrap gap-2">
              <RegionButton
                region="Africa"
                isActive={regionsSelected.includes("Africa")}
                setRegion={handleRegionClick}
              />
              <RegionButton
                region="Americas"
                isActive={regionsSelected.includes("Americas")}
                setRegion={handleRegionClick}
              />
              <RegionButton
                region="Asia"
                isActive={regionsSelected.includes("Asia")}
                setRegion={handleRegionClick}
              />
              <RegionButton
                region="Europe"
                isActive={regionsSelected.includes("Europe")}
                setRegion={handleRegionClick}
              />
              <RegionButton
                region="Oceania"
                isActive={regionsSelected.includes("Oceania")}
                setRegion={handleRegionClick}
              />
            </div>
          </div> */}
        </div>

        {/* Table */}
        <div className="w-full">
          <div className="flex flex-col gap-5">
            <Table columns={["Flag", "Name", "Population", "Area", "Region"]}>
              {countries.map((country) => (
                <tr key={country.name.common} className="hover:bg-gray-50">
                  <td className="py-4">
                    <Image
                      src={country.flags.png}
                      alt={`Flag of ${country.name.common}`}
                      width={100}
                      height={100}
                      className="object-cover rounded-sm"
                    />
                  </td>
                  <td className="py-4 font-medium text-sm">
                    {country.name.common}
                  </td>
                  <td className="py-4 font-medium text-sm">
                    {country.population.toLocaleString()}
                  </td>
                  <td className="py-4 font-medium text-sm">
                    {country.area.toLocaleString()}
                  </td>
                  <td className="py-4 font-medium text-sm">{country.region}</td>
                </tr>
              ))}
            </Table>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              search={search}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
