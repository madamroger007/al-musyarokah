
import React from 'react'

type CardCuriculumProps = {
    className?: string;
    name: string;
    icon: React.ReactNode;
    description: string;

}

function CardCuriculum(props: CardCuriculumProps) {
    return (
        <div className={"max-w-[400px] relative  rounded-[32px] border border-[#fea439] py-10 px-5 " + props.className}>

            <div className="relative flex-col justify-start items-center gap-[22px] inline-flex">
                <div className="w-[100px] h-[100px] relative bg-[#fef8ec] rounded-full border border-black flex justify-center items-center">
                    {props.icon}
                </div>
                <div className="w-[325px] text-center text-black text-[32px] font-semibold font-['Fredoka'] leading-10 tracking-wide">{props.name}</div>
                <div className="self-stretch text-center text-black text-xl font-normal font-['Fredoka'] leading-[33.10px] tracking-wide">{props.description}</div>

            </div>
        </div>
    )
}

export default CardCuriculum