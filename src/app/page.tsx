import { getCountries } from "@/actions/countries";
import Home from "@/components/home/Home";
import { CountriesResponse } from "@/interfaces/responses";

type SearchParams = Promise<{ page: string, search: string }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page } = await searchParams;
  const pageNumber = parseInt(page ?? "1", 10);
  const response: CountriesResponse = await getCountries(pageNumber);
  const { countries, totalCountries, totalPages } = response;

  return (
    <Home
      countries={countries}
      totalCountries={totalCountries}
      totalPages={totalPages}
    />
  );
}
