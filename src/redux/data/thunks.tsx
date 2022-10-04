import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDataPokemon } from "~/components/content/type";
import { fetchPokemonsData, fetchPokemonsName } from "~/requests/apiRequests";

import { IResult } from "../../types/apiTypes";

export const dataSliceName = {
  pokemons: "pokemons",
  pokemonName: "pokemonItem",
  pokemonData: "pokemonData",
};

export const fetchPokemons = createAsyncThunk<
  IResult[],
  { limit: number; offset: number }
>(dataSliceName.pokemons, async (payload) => {
  return fetchPokemonsData(payload);
});

export const fetchPokemonData = createAsyncThunk<
  IDataPokemon,
  { name: string }
>(dataSliceName.pokemonData, async ({ name }) => {
  return fetchPokemonsName(name);
});
