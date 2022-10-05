import { IRequestResult } from "../../types/apiTypes";
import { IDataPokemon } from "~/components/Content/types";

export interface IInitialState {
  pokemons: IRequestResult[];
  pokemonDetails: IDataPokemon | null;
  limit: number;
  name: string;
  status: null | string;
  error: null;
  offset: number;
}
