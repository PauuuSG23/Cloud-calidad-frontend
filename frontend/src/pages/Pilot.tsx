import { Bio } from "@/components/Pilot/Bio"
import { Stats } from "@/components/Pilot/Stats"
import { BackHome } from "@/components/ui/BackHome"
import { Error } from "@/components/ui/Error"
import type { Estadisticas } from "@/models/Estadisticas.class"
import type { Pilot as PilotType } from "@/models/Pilot.class"
import { pilotsServices } from "@/services/Pilots.service"
import { statsServices } from "@/services/Stats.service"
import { useQuery } from "@tanstack/react-query"
import { Loader } from "lucide-react"
import { useParams } from "react-router"

export const Pilot = () => {

    let { name } = useParams()

    const { data: pilot, isLoading: loadingPilot, error: pilotError, refetch: refetchPilot } = useQuery<PilotType>({
        queryKey: ["piloto", name],
        queryFn: () => pilotsServices.getByName(name || ""),
        staleTime: 1000 * 5 * 60 // 5 minutes
    })
    
    const { data: statdistics, isLoading: loadingStats, error: statsError, refetch: refetchStats } = useQuery<Estadisticas>({
        queryKey: ["stats", pilot?.id],
        queryFn: () => statsServices.getByPilotId(Number(pilot?.id)),
        staleTime: 1000 * 5 * 60 // 5 minutes
    })

    if (loadingPilot || loadingStats) {
        return <Loader />
    }

    if (pilotError) {
        return <Error message={pilotError.message} refetch={refetchPilot} />
    }
    
    if (statsError) {
        return <Error message={statsError.message} refetch={refetchStats} />
    }
    

    return (
        <>
            <BackHome className="absolute top-2 right-2" />
            <Bio pilot={pilot} />
            <Stats stats={statdistics} />
        </>
    )
} 