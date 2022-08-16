import { pokeTypes } from './weakness/pokemon.types';

export function typeCheck(pokemonType: string[]) {
  const types = Object.keys(pokeTypes);

  if (pokemonType.every((type: string) => types.indexOf(type) >= 0)) {
    return true;
  } else {
    return false;
  }
}
