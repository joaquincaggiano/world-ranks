import { getCountryById } from "@/actions/countries";
import CountryDetail from "@/components/country/Country";

type Params = Promise<{
  id: string;
}>;

const CountryPage = async ({ params }: { params: Params }) => {
  const data = await params;
  const id = data.id;
  const country = await getCountryById(id);

  if (!country) {
    return <div>Country not found</div>;
  }

  return <CountryDetail country={country} />;
};

export default CountryPage;
