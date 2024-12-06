import LayoutComponent from '@/components/LayoutComponent'
import Detailpage from '@/components/pages/program/Detailpage'
import { getData } from '@/lib/api-data'
import { NewsType } from '@/types/data'
import { dataNews } from '@/utils/data'
import React from 'react'

async function page({ params }: { params: { id: string } }) {

    const dataProgram = await getData(`${process.env.API_URL}/program/${params.id}`);
    const dataPrograms = [{
        id: dataProgram.id,
        title: dataProgram.name,
        description: dataProgram.description,
        img: dataProgram.imageUrl,
        date: dataProgram.createdAt,
        author: "admin",
    }];

    return (
        <LayoutComponent>
            <Detailpage<NewsType>
                items={dataPrograms}
            />

        </LayoutComponent>
    )
}

export default page
