import type { Pilot } from "@/models/Pilot.class";
import { Link } from "react-router";

export const CardPiloto = ({ piloto }: { piloto: Pilot }) => {
    return (
        <Link to={`/pilots/${piloto.name}`}>
            <div className="text-white bg-black/50 flex justify-center items-center flex-col relative h-80"
                style={{ background: `linear-gradient(90deg,rgba(2, 0, 36, 0.6) 0%, rgba(121, 16, 9, 0.6) 50%, rgba(0, 30, 89, 0.6) 100%), url(${piloto.photo})`, backgroundPosition: "center", backgroundSize: "cover", }}>
                <h1 className="text-2xl">{piloto.name} | {piloto.number}</h1>
                <p className="absolute bottom-2 left-2 text-3xl font-emoji">{piloto.nationality}</p>
                <span className="flex justify-center items-center gap-2 absolute bottom-2 right-2 rounded-lg px-4 py2"
                    style={{ backgroundColor: piloto.equipos?.team_color }}>
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                    <p>{piloto.equipos?.name}</p>
                </span>
            </div>
        </Link>
    )
}