import { getBorders, getCountryById } from "@/actions/countries";
import CountryDetail from "@/components/country/Country";

type Params = Promise<{
  id: string;
}>;

const CountryPage = async ({ params }: { params: Params }) => {
  const data = await params;
  const id = data.id;
  const country = await getCountryById(id);
  const borders = await getBorders(country?.borders || []);

  if (!country) {
    return <div>Country not found</div>;
  }

  return <CountryDetail country={country} borders={borders} />;
};

export default CountryPage;
