import type { Pilot } from "@/models/Pilot.class"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { CardPiloto } from "../ui/CardPiloto"

export const Pilotos = ({data}: {data: Array<Pilot>}) => {
    return (
        <section className="flex flex-col h-screen justify-center items-center gap-6 font-montserrat w-full bg-[#7D7D7D]"
            style={{ background: "radial-gradient(circle,rgba(125, 125, 125, 1) 0%, rgba(0, 0, 0, 1) 100%)" }}>
            <h1 className="text-white text-7xl">Pilotos</h1>
            <Carousel >
                <CarouselContent >
                    {data.map((pilot: Pilot) => (
                        <CarouselItem className="basis-1/3">
                            <CardPiloto piloto={pilot} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious variant={"destructive"} />
                <CarouselNext variant={"destructive"}/>
            </Carousel>
        </section>
    )
}