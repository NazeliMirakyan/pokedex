import React, { useEffect } from "react";

import PaginatedItems from "../Paginate/ReactPaginate";
import { useAppSelector, useAppDispatch } from "~/hooks";
import { dataSelectors } from "~/redux";

import style from "./Content.module.scss";
import PokemonItem from "./Pokemon/PokemonItem";
import Loader from "./Loader/ReactLoader/Loader";
import { fetchPokemons } from "~/redux/data/thunks";

const Content = () => {
  const pokemons = useAppSelector(dataSelectors.selectPokemons);
  const limit = useAppSelector(dataSelectors.selectLimit);
  const offset = useAppSelector(dataSelectors.selectOffset);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemons({ limit, offset }));
  }, [dispatch]);

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
