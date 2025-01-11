"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SearchSvg from "../icons/SearchSvg";
import Table from "../table/Table";
import Image from "next/image";
import Pagination from "../pagination/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Country } from "@prisma/client";
import RegionButton from "../button/RegionButton";
import { createQuery } from "@/utils/createQueryString";

interface Props {
  countries: Country[];
  totalCountries: number;
  totalPages: number;
}

const Home = ({ countries, totalCountries, totalPages }: Props) => {
  const isRegionChange = useRef(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const regions = searchParams.get("regions") || "";

  const [search, setSearch] = useState<string>("");
  const [regionsSelected, setRegionsSelected] = useState<string[]>([]);
  // const [isRegionChange, setIsRegionChange] = useState(false);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      return createQuery(searchParams, name, value);
    },
    [searchParams]
  );

  const handleRegionClick = (region: string) => {
    isRegionChange.current = true;
    let queryString = "";

    if (regions.includes(region)) {
      const updatedRegions = regions
        .split(",")
        .filter((r) => r && r !== region)
        .join(",");

      setRegionsSelected(regionsSelected.filter((r) => r !== region));
      queryString = createQueryString("regions", updatedRegions);
    } else {
      setRegionsSelected([...regionsSelected, region]);
      const newRegions = regions ? `${regions},${region}` : region;
      queryString = createQueryString("regions", newRegions);
    }

    router.push(pathname + "?" + queryString);
  };

  useEffect(() => {
    if (isRegionChange.current) {
      isRegionChange.current = false;
      return;
    }

    const timeoutId = setTimeout(() => {
      const queryString = createQueryString("search", search);
      router.push(pathname + "?" + queryString);
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [search, createQueryString, pathname, router]);

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Sort by name, population or area */}
      <div className="flex gap-5 w-full">
        <div className="flex flex-col gap-8 w-full max-w-[300px]">
          {/* Sort by name, population or area */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-white text-xs font-medium">Sort by</span>
            <div className="flex items-center gap-2 border-2 border-dark2 rounded-xl p-2 font-medium text-sm w-full max-w-[250px]">
              <select
                className="bg-transparent w-full"
                onChange={(e) => {
                  const queryString = createQueryString(
                    "orderBy",
                    e.target.value
                  );
                  router.push(pathname + "?" + queryString);
                }}
              >
                <option value="name">Name</option>
                <option value="population">Population</option>
                <option value="area">Area</option>
              </select>
              <div />
            </div>
          </div>

          {/* Region */}
          <div className="flex flex-col gap-2 w-full max-w-[250px]">
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
          </div>
        </div>

        {/* Table */}
        <div className="w-full">
          <div className="flex flex-col gap-5">
            <Table
              columns={["Flag", "Name", "Population", "Area (km²)", "Region"]}
            >
              {countries.map((country) => (
                <tr
                  key={country.name}
                  className="cursor-pointer hover:bg-dark2"
                  onClick={() => router.push(`/country/${country.id}`)}
                >
                  <td className="py-4">
                    <Image
                      src={country.flag}
                      alt={`Flag of ${country.name}`}
                      width={100}
                      height={100}
                      className="object-cover rounded-sm"
                    />
                  </td>
                  <td className="py-4 font-medium text-sm">{country.name}</td>
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

            <Pagination currentPage={page} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
