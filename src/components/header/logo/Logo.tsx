import Image from "next/image";

import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <Image
        src="https://assets.pokemon.com/assets/cms2-ru-ru/img/misc/gus/buttons/logo-pokemon-79x45.png"
        width={200}
        height={100}
        className={style.img}
      />
    </div>
  );
};
export default Logo;
