"use server";

import { BorderData } from "@/interfaces/country";
import { prisma } from "../../prisma/db";
import { Prisma } from "@prisma/client";

export const getCountries = async (
  page: number = 1,
  orderBy: "name" | "population" | "area" = "name",
  search: string = "",
  regions?: string[]
) => {
  try {
    const whereClause: Prisma.CountryWhereInput = {
      AND: [
        {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive" as Prisma.QueryMode,
              },
            },
            {
              region: {
                contains: search,
                mode: "insensitive" as Prisma.QueryMode,
              },
            },
            {
              subregion: {
                contains: search,
                mode: "insensitive" as Prisma.QueryMode,
              },
            },
          ],
        },
        ...(regions?.length
          ? [
              {
                region: {
                  in: regions,
                  mode: "insensitive" as Prisma.QueryMode,
                },
              },
            ]
          : []),
      ],
    };
    const countries = await prisma.country.findMany({
      where: whereClause,
      skip: (page - 1) * 10,
      take: 10,
      orderBy: {
        [orderBy]: "asc",
      },
    });

    const totalCountries = await prisma.country.count({
      where: whereClause,
    });
    const totalPages = Math.ceil(totalCountries / 10);

    // revalidatePath("/");
    return { countries, totalCountries, totalPages };
  } catch (error) {
    console.error(error);
    return { countries: [], totalCountries: 0, totalPages: 0 };
  }
};

export const getCountryById = async (id: string) => {
  try {
    const country = await prisma.country.findUnique({
      where: { id },
    });

    return country;
  } catch (error) {
    console.log(error);
  }
};

export const getBorders = async (borders: string[]) => {
  try {
    const bordersData: BorderData[] = await Promise.all(
      borders.map(async (border) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        const data = await response.json();

        return {
          name: data[0].name.common,
          flag: data[0].flags.png,
        };
      })
    );
    return bordersData;
  } catch (error) {
    console.log(error);
    return []
  }
};
