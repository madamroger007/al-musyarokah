import CardCuriculum from '@/components/elemen/card/CardCuriculum'
import { CuriculumItem } from '@/types/data';
import React from 'react'

interface CuriculumProps {
    title: string;
    description: string;
    items: CuriculumItem[]
}

function Curiculum(props: CuriculumProps) {
    return (
        <div className="w-full px-[30px] py-14 bg-gradient-to-l from-[#edfefc] to-[#fef6ec] flex-col justify-center items-center inline-flex">
            <div className="relative text-center">
                <h1 className="text-black text-[45px] font-bold font-['Fredoka'] leading-[56.47px] tracking-wider">{props.title}</h1>
                <p className=" text-black text-2xl font-normal font-['Fredoka'] leading-10 tracking-wide">{props.description}</p>
            </div>
            <div className="relative md:px-[30px] py-[99px] flex flex-wrap justify-center items-center gap-[30px] ">

                {props.items.map(item => (
                    <CardCuriculum key={item.id} name={item.name} description={item.description}
                        icon={
                            item.icon
                        }
                    />
                ))}




            </div>
        </div>
    )
}

export default Curiculum