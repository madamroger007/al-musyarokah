import { ClockIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
interface CardNewsProps {
    id: number;
    img: string;
    title: string;
    date: string;
    author: string;
}
function CardNews(props: CardNewsProps) {
    return (
        <Link href={`/berita/${props.id}`} className="max-w-[378.20px] pb-10 relative rounded-[32px] border border-[#666666]">
            <Image width={400} height={400} alt='News' className="relative rounded-tl-[32px] rounded-tr-[32px]" src={props.img} />
            <section className='relative px-5 grid gap-5'>
                <div className="grid grid-cols-2">
                    <div className=" text-[#666666] text-lg font-normal font-['Fredoka'] leading-[30.87px] tracking-wide flex items-center justify-start gap-2 w-full"><ClockIcon className='w-6 h-6' />{props.date}</div>
                    <div className=" text-[#666666] text-lg font-normal font-['Fredoka'] leading-[30.87px] tracking-wide flex items-center justify-end gap-2 w-full"><UserCircleIcon className='w-6 h-6' />{props.author}</div>
                </div>
                <h1 className=" text-[#333333] text-2xl font-semibold font-['Fredoka'] leading-10 tracking-wide">{props.title}</h1>
            </section>
        </Link>
    )
}

export default CardNews