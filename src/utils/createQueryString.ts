import { ReadonlyURLSearchParams } from "next/navigation";

export const createQuery = (
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string
) => {
  const params = new URLSearchParams(searchParams.toString());
  if (name === "regions") {
    params.delete("search");
  }
  params.set(name, value);

  return params.toString();
};
