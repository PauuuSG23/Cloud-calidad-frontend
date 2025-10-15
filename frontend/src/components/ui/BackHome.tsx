import { Home } from "lucide-react"
import { Link } from "react-router"

export const BackHome = ({...props} ) => {
    return (
        <Link to={"/"} className={`bg-red-600/60 hover:bg-red-600 hover:scale-110 transitions-all duration-200 rounded-lg px-5 py-2 flex justify-center items-center gap-3 text-xl text-white ${props.className}`}>Volver al inicio <Home /></Link>
    )
}