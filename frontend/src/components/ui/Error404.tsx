import { BackHome } from "./BackHome"

export const Error404 = () => {
    return (
        <div className="absolute w-full h-screen flex justify-center items-center">
            <span className="flex justify-center items-center bg-amber-500/60 flex-col gap-4 p-5 rounded-2xl">
                <h2 className="text-6xl text-white">Error</h2>
                <p className="text-2xl text-white">Pagina no encontrada</p>
                <BackHome />
            </span>
        </div>
    )
}