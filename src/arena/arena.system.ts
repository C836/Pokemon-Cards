export class BattleSystem {
  data: {
    log: {
      attacker: string;
      atk: number;
      defender: string;
      def: number;
      hp: number;
      damage: number;
    }[];
    win: boolean;
  };

  constructor(Pokemon, Opponent) {
    this.data = this.battle(Pokemon, Opponent);
  }

  battle(Pokemon, Opponent) {
    const log = [];

    let PokemonHp = Pokemon.attributes.hp.valueOf();
    let OpponentHp = Opponent.attributes.hp.valueOf();

    let PokemonTurn = Pokemon.attributes.speed > Opponent.attributes.speed;
    let OpponentTurn = !PokemonTurn;

    while (PokemonHp > 0 && OpponentHp > 0) {
      const attacker = PokemonTurn ? Pokemon : Opponent;
      const defender = PokemonTurn ? Opponent : Pokemon;

      const attack = Pokemon.attributes.attack;
      const spAttack = Pokemon.attributes.spAttack;

      const defense = Pokemon.attributes.defense;
      const spDefense = Pokemon.attributes.spDefense;

      const finalAttack = attack > spAttack ? attack : spAttack;
      const finalDefense = finalAttack === attack ? defense : spDefense;

      const finalDamage = this.finalDamage(finalAttack, finalDefense);

      if (PokemonTurn) {
        OpponentHp -= finalDamage;
      } else {
        PokemonHp -= finalDamage;
      }

      let defenderHp = PokemonTurn ? OpponentHp : PokemonHp;
      defenderHp -= finalDamage;

      PokemonTurn = !PokemonTurn;
      OpponentTurn = !OpponentTurn;

      log.push(this.format(attacker, defender, defenderHp, finalDamage));
    }

    const win = OpponentHp <= 0;

    return {
      log: log,
      win: win,
    };
  }

  format(attacker, defender, defenderhp, finalDamage) {
    const attackerName = attacker.name;
    const defenderName = defender.name;

    const result = {
      attacker: attackerName,
      atk: attacker.atk,
      defender: defenderName,
      def: defender.def,
      hp: defenderhp,
      damage: finalDamage,
    };

    return result;
  }

  finalDamage(atk, def) {
    const finalDamage = atk / def / 50 + 2;
    const parsedDamage = Math.trunc(finalDamage)

    return parsedDamage;
  }
}
