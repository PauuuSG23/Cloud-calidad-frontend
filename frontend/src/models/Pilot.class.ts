import type { Team } from "./Team.class";

export class Pilot {
  id: number;
  name: string;
  nationality: string;
  number: number;
  photo: string;
  bio: string;
  equipos?: Team;

  constructor(
    id: number,
    name: string,
    nationality: string,
    number: number,
    photo: string,
    bio: string
  ) {
    this.id = id;
    this.name = name;
    this.nationality = nationality;
    this.number = number;
    this.photo = photo;
    this.bio = bio;
  }
}
