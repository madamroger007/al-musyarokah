import LayoutComponent from '@/components/LayoutComponent'
import Detailpage from '@/components/pages/program/Detailpage'
import { getData } from '@/lib/api-data'
import { NewsType } from '@/types/data'
import { dataNews } from '@/utils/data'
import React from 'react'

async function page({ params }: { params: { id: string } }) {
    const dataBerita = await getData(`${process.env.API_URL}/posts/${params.id}`);
    const dataBeritas = [{
        id: dataBerita.id,
        title: dataBerita.name,
        description: dataBerita.description,
        img: dataBerita.imageUrl,
        date: dataBerita.createdAt,
        author: "admin",
    }];
    return (
        <LayoutComponent>
            <Detailpage<NewsType>
                items={dataBeritas}
            />

        </LayoutComponent>
    )
}

export default page
