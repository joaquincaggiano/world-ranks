"use server";

// import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/db";
import { Prisma } from "@prisma/client";

export const getCountries = async (
  page: number = 1,
  orderBy: "name" | "population" | "area" = "name",
  search: string = "",
  regions?: string[],
) => {
  try {
    const whereClause: Prisma.CountryWhereInput = {
      AND: [
        {
          OR: [
            { name: { contains: search, mode: "insensitive" as Prisma.QueryMode } },
            { region: { contains: search, mode: "insensitive" as Prisma.QueryMode } },
            { subregion: { contains: search, mode: "insensitive" as Prisma.QueryMode } }
          ]
        },
        ...(regions?.length ? [{
          region: {
            in: regions,
            mode: "insensitive" as Prisma.QueryMode
          }
        }] : [])
      ]
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
