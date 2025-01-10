import { Country } from "@prisma/client";

export interface CountriesResponse {
  countries: Country[];
  totalCountries: number;
  totalPages: number;
}