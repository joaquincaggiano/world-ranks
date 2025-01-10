"use server";

import { prisma } from "../../prisma/db";

export const getCountries = async (
  page: number = 1,
  where?: {
    name?:string
    region?: string;
    subregion?: string;
  },
  orderBy?: {
    name?: "asc";
    population?: "asc";
    area?: "asc";
  }
) => {
  try {
    const countries = await prisma.country.findMany({
      where,
      skip: (page - 1) * 10,
      take: 10,
      orderBy,
    });
    const totalCountries = countries.length;
    const totalPages = Math.ceil(totalCountries / 10);

    return { countries, totalCountries, totalPages };
  } catch (error) {
    console.error(error);
    return { countries: [], totalCountries: 0, totalPages: 0 };
  }
};
