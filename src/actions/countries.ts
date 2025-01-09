"use server";

import { Country } from "@/interfaces/country";

export const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data: Country[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
