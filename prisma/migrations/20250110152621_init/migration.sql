-- CreateEnum
CREATE TYPE "Region" AS ENUM ('Africa', 'Americas', 'Asia', 'Europe', 'Oceania');

-- CreateEnum
CREATE TYPE "Subregion" AS ENUM ('Northern_Africa', 'Western_Africa', 'Southern_Africa', 'Eastern_Africa', 'Middle_Africa', 'Northern_America', 'Central_America', 'Southern_America', 'Caribbean', 'Northern_Europe', 'Southern_Europe', 'Western_Europe', 'Eastern_Europe', 'Central_Europe', 'Southern_Asia', 'Central_Asia', 'Eastern_Asia', 'Southeastern_Asia', 'Western_Asia');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('Spanish', 'English', 'French', 'Arabic', 'Chinese', 'Russian', 'Portuguese', 'German', 'Italian', 'Japanese', 'Hindi', 'Bengali', 'Korean', 'Turkish', 'Swahili', 'Dutch', 'Greek', 'Hebrew', 'Persian', 'Polish', 'Ukrainian', 'Vietnamese', 'Thai', 'Tamil', 'Urdu', 'Malay', 'Czech', 'Hungarian', 'Romanian', 'Bulgarian', 'Slovak', 'Croatian', 'Serbian', 'Finnish', 'Norwegian', 'Swedish', 'Danish', 'Icelandic', 'Filipino', 'Zulu', 'Afrikaans', 'Amharic', 'Somali', 'Pashto', 'Kazakh', 'Uzbek', 'Mongolian', 'Armenian', 'Georgian', 'Albanian', 'Latvian', 'Lithuanian', 'Estonian');

-- CreateEnum
CREATE TYPE "CountryCurrency" AS ENUM ('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'FOK', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KID', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST');

-- CreateEnum
CREATE TYPE "Border" AS ENUM ('AFG', 'ALB', 'DZA', 'AND', 'AGO', 'ATG', 'ARG', 'ARM', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BTN', 'BOL', 'BIH', 'BWA', 'BRA', 'BRN', 'BGR', 'BFA', 'BDI', 'CPV', 'KHM', 'CMR', 'CAN', 'CAF', 'TCD', 'CHL', 'CHN', 'COL', 'COM', 'COG', 'COD', 'CRI', 'HRV', 'CUB', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'SWZ', 'ETH', 'FJI', 'FIN', 'FRA', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GRC', 'GRD', 'GTM', 'GIN', 'GNB', 'GUY', 'HTI', 'HND', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'ISR', 'ITA', 'CIV', 'JAM', 'JPN', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MRT', 'MUS', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NZL', 'NIC', 'NER', 'NGA', 'MKD', 'NOR', 'OMN', 'PAK', 'PLW', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'POL', 'PRT', 'QAT', 'ROU', 'RUS', 'RWA', 'KNA', 'LCA', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SWE', 'CHE', 'SYR', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'YEM', 'ZMB', 'ZWE');

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "region" "Region" NOT NULL,
    "subregion" "Subregion" NOT NULL,
    "capital" TEXT NOT NULL,
    "currencies" "CountryCurrency" NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryLanguage" (
    "id" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "language" "Language" NOT NULL,

    CONSTRAINT "CountryLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BorderCountry" (
    "id" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "border" "Border" NOT NULL,

    CONSTRAINT "BorderCountry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CountryLanguage_countryId_language_key" ON "CountryLanguage"("countryId", "language");

-- CreateIndex
CREATE UNIQUE INDEX "BorderCountry_countryId_border_key" ON "BorderCountry"("countryId", "border");

-- AddForeignKey
ALTER TABLE "CountryLanguage" ADD CONSTRAINT "CountryLanguage_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BorderCountry" ADD CONSTRAINT "BorderCountry_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
