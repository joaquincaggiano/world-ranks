import { getCountries } from "@/actions/countries";
import Home from "@/components/home/Home";
import { CountriesResponse } from "@/interfaces/responses";

type SearchParams = Promise<{
  page: string;
  orderBy: "name" | "population" | "area";
  search: string;
  regions: string;
}>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page, orderBy, search, regions } = await searchParams;
  const pageNumber = parseInt(page ?? "1", 10);
  const response: CountriesResponse = await getCountries(
    pageNumber,
    orderBy,
    search,
    regions ? regions.split(",") : []
  );
  const { countries, totalCountries, totalPages } = response;

  return (
    <Home
      countries={countries}
      totalCountries={totalCountries}
      totalPages={totalPages}
    />
  );
}
