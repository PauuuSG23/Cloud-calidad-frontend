import { Team } from "@/models/Team.class"

export const Teams = ({ data }: { data: Array<Team> }) => {
    return (
        <section className="flex flex-col h-screen justify-center items-center gap-6 font-montserrat">
            <h1 className="text-white text-7xl">Equipos</h1>
            <span className="flex flex-wrap justify-center items-center gap-5">
                {data?.map((team: Team) => (
                    <div key={team.id} className={`flex justify-center items-center flex-col gap-5 text-2xl shadow-lg hover:scale-110 transition-all duration-200 ease-in-out h-fit text-wrap w-50 p-10 text-center rounded-2xl`}
                        style={{ backgroundColor: `${team.team_color}90` }}
                    >
                        <h1 className="text-white">{team.name}</h1>
                        <img src={team.logo} alt={team.name} className="h-50 w-50 object-contain" />
                    </div>
                ))}
            </span>
        </section>
    )
}  