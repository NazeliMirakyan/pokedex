import { store } from "../redux";
import { IDataPokemon } from "~/components/content/type";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum EStatus {
  LOADING = "loading",
  RESOLVED = "resolved",
  REJECTED = "rejected",
}

export interface IData {
  name: string;
  url: string;
}

export interface IName {
  name: string;
}

export interface ITypes {
  type: IName;
}

export interface IFrontDefault {
  front_default: string;
}

export interface IOther {
  dream_world: IFrontDefault;
}

export interface ISprites {
  other: IOther;
}
export interface IName {
  name: string;
  url: string;
}

export interface IAbilities {
  ability: IName;
}
export interface IDataAbout {
  abilities: IAbilities[];
  id: number;
  name: string;
  height: number;
  weight: number;
  url: string;
  sprites: ISprites;
}

export interface IInitialState {
  pokemons: IResult[];
  pokemonDetails: IDataPokemon | null;
  limit: number;
  name: string;
  status: null | string;
  error: null;
  offset: number;
}

export interface IResult {
  name: string;
  url: string;
  value: string;
}

export interface IPokemonName {
  name: string;
  url: string;
}

export interface IPokemon {
  pokemon: IPokemonName;
}

export interface IDataAboutStructure {
  id: number;
  name: string;
  pokemon: IPokemon[];
}
export interface IDataStructure {
  count: number;
  results: IResult[];
}
