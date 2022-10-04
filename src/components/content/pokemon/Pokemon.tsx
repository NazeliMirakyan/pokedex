import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import Link from "~/helper/PageLinks";
import { useAppDispatch } from "~/hooks";
import { pokemonUrl } from "~/requests/BaseUrl";
import { convertZero } from "~/helper/ConvertZero";

import { PokemonItemProps, IDataPokemon } from "../type";
import style from "../content.module.scss";
import Spinner from "../spinner/Spinner";

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IDataPokemon | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const { data } = await axios.get<IDataPokemon>(
        `${pokemonUrl()}${pokemon.name}`
      );

      setData(data);
    };

    fetchPokemonData();
  }, [dispatch, pokemon.name]);

  return (
    <>
      {!data ? (
        <Spinner />
      ) : (
        <Link href={`/pokemon/${pokemon.name}`}>
          <div>
            <div className={style.wrapper_item}>
              <div className={style.wrapper_item_pokemon_bg}>
                {data.sprites.other.dream_world.front_default && (
                  <Image
                    loading="lazy"
                    src={data.sprites.other.dream_world.front_default}
                    width={200}
                    height={200}
                  />
                )}
              </div>
              <div className={style.wrapper_item_profile}>
                <h2 className={style.wrapper_item_profile_name}>
                  {pokemon.name}
                </h2>
                <h5 className={style.wrapper_item_profile_number}>
                  {convertZero(data.id)}
                </h5>
                <span className={style.wrapper_profile_type}></span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default PokemonItem;
