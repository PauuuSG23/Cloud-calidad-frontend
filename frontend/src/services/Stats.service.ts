import type { Estadisticas } from "@/models/Estadisticas.class";
import { client } from "./configService";

export const statsServices = {
  getByPilotId: async (id: number) => {
    const { data } = await client.from("stats").select().eq("piloto_id", id);
    return data?.[0] as Estadisticas || [];
  },
};
