import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./types";
import { ERequestStatus } from "..";
import { SLICE_NAMES } from "~/constants/stateConstant";

import { fetchPokemonData, fetchPokemons } from "./thunks";

const initialState: IInitialState = {
  pokemons: [],
  pokemonDetails: null,
  limit: 10,
  offset: 0,
  name: "",
  status: null,
  error: null,
};

export const dataSlice = createSlice({
  name: SLICE_NAMES.data,
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload * state.limit;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.status = ERequestStatus.LOADING;
      state.error = null;
    });

    builder.addCase(fetchPokemons.fulfilled, (state, { payload }) => {
      state.status = ERequestStatus.RESOLVED;
      state.pokemons = payload;
    });

    builder.addCase(fetchPokemons.rejected, (state) => {
      state.status = ERequestStatus.REJECTED;
    });

    builder.addCase(fetchPokemonData.fulfilled, (state, { payload }) => {
      state.pokemonDetails = payload;
    });
  },
});

export const { setLimit, setOffset } = dataSlice.actions;

export default dataSlice.reducer;
