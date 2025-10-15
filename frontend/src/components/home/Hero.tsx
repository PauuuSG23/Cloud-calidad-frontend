import { Clock, MapPin, Trophy } from "lucide-react";

export const F1HeroSection = () => {
    const stats = [
        { icon: Trophy, label: 'Campeonatos', value: '74' },
        { icon: Clock, label: 'Años de Historia', value: '73' },
        { icon: MapPin, label: 'Países', value: '23' }
    ];

    return (
        <section className="flex flex-col h-screen justify-center items-center gap-6 font-montserrat w-full bg-[#7D7D7D]"
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

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none text-center">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">
                    FÓRMULA
                </span>
                <span className="block text-white text-7xl md:text-9xl -mt-4">
                    UNO
                </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed text-center">
                Vive la máxima adrenalina del automovilismo mundial.
                <span className="text-red-400 font-semibold"> Velocidad</span>,
                <span className="text-orange-400 font-semibold"> pasión</span> y
                <span className="text-yellow-400 font-semibold"> gloria</span> en cada curva.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`text-center transform transition-all duration-700 translate-y-5`}
                        style={{ transitionDelay: `${0.5 + index * 0.2}s` }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-10 rounded-full mb-3 backdrop-blur-sm">
                            <stat.icon className="w-8 h-8 text-red-400" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}