import type { Pilot } from "@/models/Pilot.class";

export const Bio = ({ pilot }: { pilot: Pilot | undefined }) => {
    return (
        <section className="grid grid-cols-3 place-items-center gap-5 p-5 h-screen">
            <h1 className="text-4xl font-black mb-6 leading-none text-center col-span-3">
                <span className="block text-white text-5xl">
                    Piloto:
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">
                    {pilot?.name}
                </span>
            </h1>
            <span className="flex flex-col justify-center items-center gap-4 col-span-1 relative">
                <img src={pilot?.photo} alt={pilot?.name} className="relative rounded-2xl w-[350px] object-cover" />
                <p className="absolute top-2 left-2 text-6xl font-emoji">{pilot?.nationality}</p>
                <p className="text-2xl text-white">Número: {pilot?.number}</p>
                <span className="flex justify-center items-center gap-2 absolute bottom-10 right-2 rounded-lg px-4 py2"
                    style={{ backgroundColor: pilot?.equipos?.team_color }}>
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                    <p className="text-white">{pilot?.equipos?.name}</p>
                </span>
            </span>
            <p className="col-span-2 bg-zinc-600/80 rounded-lg h-full text-white w-full flex justify-center items-center text-2xl text-center">{pilot?.bio}</p>
        </section>
    )
}