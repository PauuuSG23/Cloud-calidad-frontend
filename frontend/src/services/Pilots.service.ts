import type { Pilot } from "@/models/Pilot.class";
import { client } from "./configService";

export const pilotsServices = {
  getAll: async () => {
    const { data } = await client
    .from("pilotos")
    .select(`
            *,
    equipos (
      id,
      name,
      team_color
    )
            `);
    return data;
  },
getByName: async (name: string) => {
    const { data } = await client
        .from("pilotos")
        .select(`
            *,
            equipos (
                id,
                name,
                team_color
            )
        `)
        .eq("name", name)
    return data?.[0] as Pilot || null;
}
};
