import {F1HeroSection} from "@/components/home/Hero"
import { Pilotos } from "@/components/home/Pilotos"
import { Teams } from "@/components/home/Teams"
import { Error } from "@/components/ui/Error"
import { Loader } from "@/components/ui/Loader"
import { pilotsServices } from "@/services/Pilots.service"
import { teamServices } from "@/services/Team.service"
import { useQuery } from "@tanstack/react-query"

export const Home = () => {
    const { data: teams, isLoading: loadingTeams, error: teamsError, refetch: refetchTeams } = useQuery({
        queryKey: ["teams"],
        queryFn: teamServices.getAll,
        staleTime: 1000 * 5 * 60 // 5 minutes
    })
    
    const { data: pilots, isLoading: loadingPilots, error: pilotsError, refetch: refetchPilots } = useQuery({
        queryKey: ["pilotos"],
        queryFn: pilotsServices.getAll,
        staleTime: 1000 * 5 * 60 // 5 minutes
    })

    if (loadingTeams || loadingPilots) {
        return <Loader />
    }

    if (teamsError) {
        return <Error message={teamsError.message} refetch={refetchTeams} />
    }
    
    if (pilotsError) {
        return <Error message={pilotsError.message} refetch={refetchPilots} />
    }

    return (
        <>
            <F1HeroSection />
            <Teams data={teams || []} />
            <Pilotos data={pilots || []} />
        </>
    )
}