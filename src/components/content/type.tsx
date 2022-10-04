import { IResult } from "~/redux";

export type PokemonItemProps = {
  pokemon: IDataPokemon | IResult;
};

export interface IName {
  name: string;
}

export interface IAbilities {
  ability: IName;
}

export interface ITypes {
  type: IName;
}

export interface IFrontdefault {
  front_default: string;
}

export interface IOther {
  dream_world: IFrontdefault;
}

export interface ISprites {
  other: IOther;
}
export interface IDataPokemon {
  abilities: IAbilities[];
  id: number;
  height: number;
  name: string;
  sprites: ISprites;
  weight: number;
  types: ITypes[];
}
export interface IData {
  name: string;
  limit: number;
  pokemons: IDataPokemon[];
}
export interface IDataItem {
  data: IData;
}
