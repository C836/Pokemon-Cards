import { pokeTypes } from './pokemon.types';

export function getMultiplier(pokemonTypes, opponentTypes) {
  let multipliersArray = [];

  opponentTypes.map((opponentType) => {
    pokemonTypes.map((pokemonType) => {
      multipliersArray.push(pokeTypes[opponentType][pokemonType]);
    });
  });

  return Math.max(...multipliersArray);
}
