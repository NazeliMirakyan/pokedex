import React from "react";
import PaginatedItems from "../paginate/ReactPaginate";

import { useAppSelector } from "~/hooks";
import { dataSelectors } from "~/redux";

import style from "./content.module.scss";
import PokemonItem from "./pokemon/Pokemon";
import Loader from "./spinner/Loader";

const Content = () => {
  const pokemons = useAppSelector(dataSelectors.selectPokemons);

  const pokemonData = pokemons.map((pokemon) => (
    <div key={pokemon.name}>
      <PokemonItem pokemon={pokemon} />
    </div>
  ));

  return (
    <div className={style.wrapper}>
      {!pokemons?.length ? (
        <Loader />
      ) : (
        <>
          {pokemonData},
          <PaginatedItems />
        </>
      )}
    </div>
  );
};
export default Content;
