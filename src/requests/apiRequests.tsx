import { IDataStructure } from "~/redux";
import { IDataPokemon } from "~/components/Content/types";

import { API } from "./baseUrl";

export const fetchPokemonsData = async ({
  limit = 10,
  offset = 0,
}: Partial<{ limit: number; offset: number }>) => {
  const { data } = await API.get<IDataStructure>("pokemon", {
    params: {
      limit,
      offset,
    },
  });

  return data.results;
};

export const fetchPokemonsName = async (name: string) => {
  const { data } = await API.get<IDataPokemon>(`pokemon/${name}`);

  return data;
};
