import { Country } from "@/interfaces/country";
import { prisma } from "./db";

async function main() {
  try {
    // Obtén los datos de la API de RestCountries
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries: Country[] = await response.json();
    const filterCountries = countries.filter((country) => {
      return (
        country.name.common &&
        country.region &&
        country.subregion &&
        country.capital &&
        country.languages &&
        country.currencies &&
        country.borders
      );
    });

    for (const country of filterCountries) {
      const flag = country.flags.png;
      const name = country.name.common;
      const population = country.population;
      const area = country.area;
      const region = country.region;
      const subregion = country.subregion;
      const capital = country.capital[0];
      const languages = Object.values(country.languages);
      const currencies = Object.values(country.currencies).map(
        (obj) => obj.name
      );
      const borders = country.borders;

      // Crear país en la base de datos
      await prisma.country.create({
        data: {
          flag,
          name,
          population,
          area,
          region,
          subregion,
          capital,
          languages,
          currencies,
          borders,
        },
      });
    }

    console.log("Datos insertados exitosamente.");
  } catch (error) {
    console.error("Error insertando datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
