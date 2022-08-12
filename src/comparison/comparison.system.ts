import { ComparisonConfig } from 'src/types/comparison.config';

export class ComparisonSystem {
  data: ComparisonConfig | false;

  constructor(Pokemon, Opponent) {
    this.data = this.comparison(Pokemon, Opponent);
  }

  comparison(Pokemon, Opponent) {
    let PokemonPoints = 0;
    let OpponentPoints = 0;

    const PokemonAttributes = Object.values(Pokemon.attributes);
    const OpponentAttributes = Object.values(Opponent.attributes);

    PokemonAttributes.map((PokemonAttribute, index) => {
      if (PokemonAttribute > OpponentAttributes[index]) {
        PokemonPoints++;
      } else {
        OpponentPoints++;
      }
    });

    if (PokemonPoints !== OpponentPoints) {
      const winner = PokemonPoints > OpponentPoints ? Pokemon : Opponent;
      const loser = PokemonPoints > OpponentPoints ? Opponent : Pokemon;

      const result = {
        winner: winner.id,
        loser: loser.id,
        details: {
          hp: winner.attributes.hp > loser.attributes.hp ? winner.id : loser.id,
          attack:
            winner.attributes.attack - loser.attributes.attack
              ? winner.id
              : loser.id,
          defense:
            winner.attributes.defense - loser.attributes.defense
              ? winner.id
              : loser.id,
          spAttack:
            winner.attributes.spAttack - loser.attributes.spAttack
              ? winner.id
              : loser.id,
          spDefense:
            winner.attributes.spDefense - loser.attributes.spDefense
              ? winner.id
              : loser.id,
          speed:
            winner.attributes.speed - loser.attributes.speed
              ? winner.id
              : loser.id,
        },
      };

      return result;
    } else {
      return false
    }
  }
}
