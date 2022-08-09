import { BattleDataConfig } from "src/types/arena.config";

export class BattleSystem {
  data: BattleDataConfig

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

      const attack = attacker.attributes.attack;
      const spAttack = attacker.attributes.spAttack;

      const defense = defender.attributes.defense;
      const spDefense = defender.attributes.spDefense;

      const finalAttack = attack > spAttack ? attack : spAttack;
      const finalDefense = finalAttack === attack ? defense : spDefense;

      const finalDamage = this.finalDamage(finalAttack, finalDefense);

      let defenderHp = PokemonTurn ? OpponentHp : PokemonHp;
      const preDamageHp = defenderHp.valueOf()

      if (PokemonTurn) {
        OpponentHp -= finalDamage;
      } else {
        PokemonHp -= finalDamage;
      }

      PokemonTurn = !PokemonTurn;
      OpponentTurn = !OpponentTurn;

      log.push(this.format(attacker, defender, preDamageHp, finalDamage));
    }

    const win = OpponentHp <= 0;

    return {
      pokemon: Pokemon.id,
      opponent: Opponent.id,
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
    //raw damage / (0.5 - (random number between 1 - 2)  +  (defense  ÷  100)) 

    const finalDamage = atk / (this.randomNumber(1, 2) + (def / 100));
    const parsedDamage = Math.trunc(finalDamage)

    return parsedDamage;
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min
  }
}
