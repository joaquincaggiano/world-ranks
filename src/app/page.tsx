import { getCountries } from "@/actions/countries";
import Home from "@/components/home/Home";

export default async function HomePage() {
  const countries = (await getCountries()) ?? [];

  return <Home countries={countries} />;
}
