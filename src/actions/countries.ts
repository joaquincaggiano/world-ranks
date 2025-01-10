"use server";

import { Country } from "@/interfaces/country";

export const getCountries = async (path: string = "all", page: number = 1) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/${path}`);
    const data: Country[] = await response.json();

    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const countries = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / 10);

    return {countries, totalCountries: data.length, totalPages};
  } catch (error) {
    console.error(error);
    return {countries: [], totalCountries: 0, totalPages: 0};
  }
};
