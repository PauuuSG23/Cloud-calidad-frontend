export class Team {
  id: number;
  name: string;
  team_color: string;
  logo: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    name: string,
    team_color: string,
    logo: string,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id;
    this.name = name;
    this.team_color = team_color;
    this.logo = logo
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
