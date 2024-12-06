import { ClockIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

interface CardFasilitasProps {
    title: string
    img: string
}
function CardFasilitas({ title, img }: CardFasilitasProps) {
    return (
        <div className="max-w-[378.20px] pb-10 relative rounded-[32px] border border-[#666666]">
            <Image width={400} height={400} alt='News' className="relative rounded-tl-[32px] rounded-tr-[32px]" src={img} />
            <h1 className=" px-10 text-[#333333] text-2xl font-semibold font-['Fredoka'] leading-10 tracking-wide">{title}</h1>

        </div>
    )
}

export default CardFasilitas