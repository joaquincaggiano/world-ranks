import { Country } from "./country";

export interface CountriesResponse {
  countries: Country[];
  totalCountries: number;
  totalPages: number;
}