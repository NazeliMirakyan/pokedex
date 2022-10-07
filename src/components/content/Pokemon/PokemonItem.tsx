import React, { useEffect, useState } from "react";
import Image from "next/image";

import Link from "~/components/PageLink/PageLinks";
import { useAppDispatch } from "~/hooks";
import { formatId } from "~/helper/formatId";
import { fetchPokemonsName } from "~/requests/apiRequests";

import { PokemonItemProps, IDataPokemon } from "../types";
import style from "./PokemonItem.module.scss";
import Spinner from "../Loader/Spiner/Spiner";

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState<IDataPokemon | null>(null);

  useEffect(() => {
    fetchPokemonsName(pokemon.name).then((res) => setData(res));
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
                {data.sprites?.other?.dream_world.front_default && (
                  <Image
                    loading="lazy"
                    src={data.sprites?.other?.dream_world.front_default}
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
                  {formatId(data.id)}
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
