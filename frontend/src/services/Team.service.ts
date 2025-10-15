import { client } from "./configService";

export const teamServices = {
    getAll: async () => {
        const { data } = await client.from("equipos").select();
        return data;
    }
}