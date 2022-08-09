export interface BattleDataConfig {
  pokemon: number;
  opponent: number;
  log: TurnConfig[];
  win: boolean;
}

export interface TurnConfig {
  attacker: string;
  atk: number;
  defender: string;
  def: number;
  hp: number;
  damage: number;
}
