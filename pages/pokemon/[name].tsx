import React from "react";
import Pokemon from "~/containers/PokemonPage/PokemonPage";
import PageLayout from "~/PageLayout/PageLayout";

const PokemonName = () => {
  return (
    <PageLayout title="Pokemon" metaDescription="some description">
      <Pokemon />
    </PageLayout>
  );
};
export default PokemonName;
