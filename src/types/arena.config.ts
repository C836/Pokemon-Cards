export interface BattleDataConfig {
  data: {
    log: TurnConfig[];
    win: boolean;
  };
}

export interface TurnConfig {
  attacker: string;
  atk: number;
  defender: string;
  def: number;
  hp: number;
  damage: number;
}
