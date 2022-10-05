import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDataPokemon } from "~/components/Content/types";
import { fetchPokemonsData, fetchPokemonsName } from "~/requests/apiRequests";

import { IRequestResult } from "../../types/apiTypes";

export const dataSliceName = {
  pokemons: "pokemons",
  pokemonName: "pokemonItem",
  pokemonData: "pokemonData",
};

export const fetchPokemons = createAsyncThunk<
  IRequestResult[],
  { limit: number; offset: number }
>(dataSliceName.pokemons, async (payload, { rejectWithValue }) => {
  try {
    return fetchPokemonsData(payload);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchPokemonData = createAsyncThunk<
  IDataPokemon,
  { name: string }
>(dataSliceName.pokemonData, async ({ name }, { rejectWithValue }) => {
  try {
    return fetchPokemonsName(name);
  } catch (error) {
    return rejectWithValue(error);
  }
});
