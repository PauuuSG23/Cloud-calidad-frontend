export class Estadisticas {
  id: number;
  piloto_id: number;
  races: number = 0;
  wins: number = 0;
  podiums: number = 0;
  poles: number = 0;
  points: number = 0.0;
  position: number;
  season_year: number;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    piloto_id: number,
    races: number = 0,
    wins: number = 0,
    podiums: number = 0,
    poles: number = 0,
    points: number = 0.0,
    position: number,
    season_year: number,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id;
    this.piloto_id = piloto_id;
    this.races = races;
    this.wins = wins;
    this.podiums = podiums;
    this.poles = poles;
    this.points = points;
    this.position = position;
    this.season_year = season_year;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
