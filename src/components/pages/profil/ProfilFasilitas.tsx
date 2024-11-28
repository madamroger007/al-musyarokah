"use client"

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CardFasilitas from '@/components/elemen/card/CardFasilitas'
function ProfilFasilitas() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className="w-full md:py-20  bg-gradient-to-l from-[#edfefc] to-[#fef6ec] flex-col justify-start items-start gap-[66px] inline-flex">
            <div className="relative px-2">
                <div className=" text-black text-[45px] font-bold font-['Fredoka'] leading-[56.47px] tracking-wider">Fasilitas Madrasah</div>
                <div className=" text-black text-2xl font-normal font-['Fredoka'] leading-[41.16px] tracking-wide">Berita dan informasi seputar kegiatan, pengumuman, prestasi, dan lain-lain yang terjadi di MDT Al Musyarokah</div>
            </div>
            <Carousel className="w-full"
                plugins={[plugin.current]}

            >
                <CarouselContent className="-ml-1 ">
                    <CarouselItem className="max-md:px-5 md:basis-1/2 lg:basis-[30%]">
                        <CardFasilitas />
                    </CarouselItem>
                    <CarouselItem className="max-md:px-5 md:basis-1/2 lg:basis-[30%]">
                        <CardFasilitas />
                    </CarouselItem>
                    <CarouselItem className="max-md:px-5 md:basis-1/2 lg:basis-[30%]">
                        <CardFasilitas />
                    </CarouselItem>
                    <CarouselItem className="max-md:px-5 md:basis-1/2 lg:basis-[30%]">
                        <CardFasilitas />
                    </CarouselItem>

                </CarouselContent>
            </Carousel>

        </div>
    )
}

export default ProfilFasilitas