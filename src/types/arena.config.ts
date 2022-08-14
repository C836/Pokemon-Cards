export interface ArenaSystemConfig extends Document {
  data: ArenaConfig;
}

export interface ArenaConfig {
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
