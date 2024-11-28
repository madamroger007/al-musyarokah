"use client"
import { useState } from 'react'
import CardNews from '@/components/elemen/card/CardNews'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
interface ShowAllCardProps {
    title: string
    subTitle: string
    items: any[]
}
function ShowAllCard(props: ShowAllCardProps) {
    const [page, setPage] = useState(1)
    const itemsPerPage = 6


    const totalPages = Math.ceil(props.items.length / itemsPerPage)

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePrevious = () => {
        setPage(page - 1)
    }

    return (
        <div className="w-full md:py-20 bg-gradient-to-l from-[#edfefc] to-[#fef6ec] flex-col justify-start items-start gap-[66px] inline-flex">
            <div className="relative px-2">
                <div className="text-black text-[45px] font-bold font-['Fredoka'] leading-[56.47px] tracking-wider">{props.title}</div>
                <div className="text-black text-2xl font-normal font-['Fredoka'] leading-[41.16px] tracking-wide">{props.subTitle}</div>
            </div>
            <section className='px-10 w-full flex  gap-10 flex-wrap'>
                {props.items.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(item => (
                    <CardNews key={item.id} {...item} />
                ))}

            </section>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={handlePrevious} />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink onClick={() => setPage(i + 1)} className={i + 1 === page ? 'bg-blue-500 text-white' : ''}>{i + 1}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext onClick={handleNext} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default ShowAllCard

