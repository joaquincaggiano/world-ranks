"use server";

// import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/db";

export const getCountries = async (
  page: number = 1,
  orderBy: "name" | "population" | "area" = "name",
  search: string = "",
) => {
  try {
    const countries = await prisma.country.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { region: { contains: search, mode: "insensitive" } },
          { subregion: { contains: search, mode: "insensitive" } }
        ]
      },
      skip: (page - 1) * 10,
      take: 10,
      orderBy: {
        [orderBy]: "asc",
      },
    });
    const totalCountries = await prisma.country.count({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { region: { contains: search, mode: "insensitive" } },
          { subregion: { contains: search, mode: "insensitive" } }
        ]
      }
    });
    const totalPages = Math.ceil(totalCountries / 10);

    // revalidatePath("/");
    return { countries, totalCountries, totalPages };
  } catch (error) {
    console.error(error);
    return { countries: [], totalCountries: 0, totalPages: 0 };
  }
};
