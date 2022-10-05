import { createSelector } from "@reduxjs/toolkit";

import { COUNT_OF_ITEMS } from "~/constants/countOfItems";

import { RootState } from "..";

const selectDataState = (state: RootState) => state.data;

export const selectPokemons = createSelector(
  selectDataState,
  (data) => data.pokemons
);

export const selectPokemonDetails = createSelector(
  selectDataState,
  (data) => data.pokemonDetails
);

export const selectLimit = createSelector(
  selectDataState,
  (data) => data.limit
);

export const selectOffset = createSelector(
  selectDataState,
  (data) => data.offset
);

export const selectPageCount = createSelector(selectLimit, (limit) =>
  Math.ceil(COUNT_OF_ITEMS / limit)
);

export const selectName = createSelector(selectDataState, (data) => data.name);
