export interface BattleDataConfig {
  winner: number;
  loser: number;
  log: TurnConfig[];
}

export interface TurnConfig {
  attacker: string;
  atk: number;
  defender: string;
  def: number;
  hp: number;
  damage: number;
}
