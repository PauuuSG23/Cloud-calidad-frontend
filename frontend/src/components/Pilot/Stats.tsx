import type { Estadisticas } from "@/models/Estadisticas.class"

export const Stats = ({ stats }: { stats: Estadisticas | undefined }) => {
    return (
        <section className="flex flex-col h-screen justify-center items-center gap-6 font-montserrat w-full bg-[#7D7D7D] relative"
            style={{ background: "radial-gradient(circle,rgba(125, 125, 125, 1) 0%, rgba(0, 0, 0, 1) 100%)" }}>

            {/* Elementos decorativos animados */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-8 shadow-2xl w-10/12">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Estadísticas del Piloto</h2>
                <table className="w-full text-white">
                    <tbody className="space-y-4 text-white w-full">
                        <tr className="border-b border-gray-600">
                            <td className="py-3 px-4 font-semibold text-blue-300">Carreras</td>
                            <td className="py-3 px-4 text-right text-2xl font-bold">{stats?.races}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                            <td className="py-3 px-4 font-semibold text-green-300">Victorias</td>
                            <td className="py-3 px-4 text-right text-2xl font-bold">{stats?.wins}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                            <td className="py-3 px-4 font-semibold text-yellow-300">Podios</td>
                            <td className="py-3 px-4 text-right text-2xl font-bold">{stats?.podiums}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                            <td className="py-3 px-4 font-semibold text-purple-300">Poles</td>
                            <td className="py-3 px-4 text-right text-2xl font-bold">{stats?.poles}</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                            <td className="py-3 px-4 font-semibold text-orange-300">Puntos</td>
                            <td className="py-3 px-4 text-right text-2xl font-bold">{stats?.points}</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-semibold text-red-300">Posición</td>
                            <td className="py-3 px-4 text-right text-2xl font-bold">{stats?.position}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}