import { store } from "../redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum ERequestStatus {
  LOADING = "loading",
  RESOLVED = "resolved",
  REJECTED = "rejected",
}

export interface IPokemonItem {
  name: string;
  url: string;
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

export interface IAbilities {
  ability: IPokemonItem;
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

export interface IRequestResult extends IPokemonItem {
  value: string;
}

export interface IDataAboutStructure {
  id: number;
  name: string;
  pokemon: Array<{ pokemon: IPokemonItem }>;
}

export interface IDataStructure {
  count: number;
  results: IRequestResult[];
}
