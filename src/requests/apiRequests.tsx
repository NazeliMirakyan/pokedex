import axios from "axios";

import { getallPokemonData } from "./BaseUrl";

import { IDataStructure } from "~/redux";
import { pokemonUrl } from "~/requests/BaseUrl";
import { IDataPokemon } from "~/components/content/type";

export const fetchPokemonsData = async ({
  limit = 10,
  offset = 0,
}: Partial<{ limit: number; offset: number }>) => {
  const { data } = await axios.get<IDataStructure>(
    getallPokemonData(limit, offset)
  );

  return data.results;
};

export const fetchPokemonsName = async (name: string) => {
  const { data } = await axios.get<IDataPokemon>(`${pokemonUrl()}${name}`);

  return data;
};
