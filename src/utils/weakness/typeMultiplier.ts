import { pokeTypes } from './pokemon.types';

export function getMultiplier(pokemonTypes: string[], opponentTypes: string[]) {
  let multipliersArray = [];

  opponentTypes.map((opponentType) => {
    pokemonTypes.map((pokemonType) => {
      multipliersArray.push(pokeTypes[opponentType][pokemonType]);
    });
  });

  const maxValueMultiplier = Math.max(...multipliersArray);
  return maxValueMultiplier;
}
