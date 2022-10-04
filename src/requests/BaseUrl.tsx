export const pokemonUrl = () => `https://pokeapi.co/api/v2/pokemon/`;

export const getallPokemonData = (limit: number, offset: number) =>
  `${pokemonUrl()}?limit=${limit}&offset=${offset}`;
