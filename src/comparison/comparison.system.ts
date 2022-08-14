import { ComparisonConfig } from 'src/types/comparison.config';
import { PokemonConfig } from 'src/types/pokemon.config';

export class ComparisonSystem {
  data: ComparisonConfig | null;

  constructor(Pokemon: PokemonConfig, Opponent: PokemonConfig) {
    this.data = this.comparison(Pokemon, Opponent);
  }

  comparison(Pokemon: PokemonConfig, Opponent: PokemonConfig) {
    let PokemonPoints = 0;
    let OpponentPoints = 0;

    const PokemonAttributes = Object.values(Pokemon.attributes);
    const OpponentAttributes = Object.values(Opponent.attributes);

    const comparisonResult = [];

    for (let index = 0; index < PokemonAttributes.length; index++) {
      if (PokemonAttributes[index] > OpponentAttributes[index]) {
        comparisonResult.push(Pokemon.id);
        PokemonPoints++;
      }
      else {
        comparisonResult.push(Opponent.id);
        OpponentPoints++;
      }
    }

    if (PokemonPoints === OpponentPoints) {
      return null
    }

    else {
      const winner = PokemonPoints > OpponentPoints ? Pokemon : Opponent;
      const loser = PokemonPoints > OpponentPoints ? Opponent : Pokemon;

      const result = {
        winner: winner.id,
        loser: loser.id,
        details: {
          hp: comparisonResult[0],
          attack: comparisonResult[1],
          defense: comparisonResult[2],
          spAttack: comparisonResult[3],
          spDefense: comparisonResult[4],
          speed: comparisonResult[5],
        },
      };

      return result
    }
  }
}
