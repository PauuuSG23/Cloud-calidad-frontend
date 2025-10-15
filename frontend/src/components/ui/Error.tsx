import { CornerLeftUp } from "lucide-react"

export const Error = ({ message, refetch }: { message: string, refetch: () => void }) => {
    return (
        <div className="absolute w-full h-screen flex justify-center items-center">
            <span className="flex justify-center items-center bg-amber-500/60">
                <h2 className="text-4xl text-white">Error</h2>
                <p className="text-2xl">{message}</p>
                <button onClick={refetch} className="bg-red-600/60 hover:bg-red-600 hover:scale-110 transitions-all duration-200">Volver al inicio <CornerLeftUp /></button>
            </span>
        </div>
    )
}