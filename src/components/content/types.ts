import { IRequestResult } from "~/redux";
import { IDataAbout } from "../../types/apiTypes";

export type PokemonItemProps = {
  pokemon: IDataPokemon | IRequestResult;
};

export interface IName {
  name: string;
}

export interface ITypes {
  type: IName;
}

export interface IDataPokemon extends IDataAbout {
  types: ITypes[];
}
