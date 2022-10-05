import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Link from "~/components/PageLink/PageLinks";
import { dataSelectors } from "~/redux";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { fetchPokemonData } from "~/redux/data/thunks";

import style from "./Pokemon.module.scss";

const Pokemon = () => {
  const pokemonDetails = useAppSelector(dataSelectors.selectPokemonDetails);

  const dispatch = useAppDispatch();

  const { query } = useRouter();
  const { name } = query;

  const imageURL =
    pokemonDetails?.sprites?.other.dream_world.front_default || "";

  const typesPokemon = pokemonDetails?.types?.map(
    (pokemon) => pokemon.type.name
  );

  const abilitiesPokemon = pokemonDetails?.abilities?.map(
    (pokemon) => pokemon.ability.name
  );

  useEffect(() => {
    if (name) {
      dispatch(fetchPokemonData({ name: String(name) }));
    }
  }, [dispatch, name]);

  return pokemonDetails ? (
    <div className={style.wrapper}>
      <Link href="/">← Explore more Pokémon</Link>

      <div className={style.wrapper_title}>
        <h2 className={style.wrapper_title_name}>{pokemonDetails.name}</h2>
        <h2 className={style.wrapper_title_id}>#0{pokemonDetails.id}</h2>
      </div>
      <div className={style.wrapper_container}>
        <div>
          {imageURL && <Image src={imageURL} width={150} height={250} />}
        </div>
        <div className={style.wrapper_container_about}>
          <div className={style.wrapper_container_about_items}>
            <p className={style.wrapper_container_about_items_small_title}>
              Height
            </p>
            <p>{pokemonDetails.height}</p>
            <p className={style.wrapper_container_about_items_small_title}>
              Types
            </p>
            <p>{typesPokemon}</p>
          </div>
          <div className={style.wrapper_container_about_items}>
            <p className={style.wrapper_container_about_items_small_title}>
              Weight
            </p>
            <p>{pokemonDetails.weight}</p>
            <p className={style.wrapper_container_about_items_small_title}>
              Abilities
            </p>
            <p>{abilitiesPokemon}</p>
          </div>
          <div className={style.wrapper_container_about_items}>
            <p className={style.wrapper_container_about_items_small_title}>
              Category
            </p>
            <p>Category</p>
            <p className={style.wrapper_container_about_items_small_title}>
              Genders
            </p>
            <p>Genders</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
export default Pokemon;
