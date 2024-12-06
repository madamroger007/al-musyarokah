import LayoutComponent from '@/components/LayoutComponent'
import ShowAllCard from '@/components/pages/program/ShowAllCard'
import { getData } from '@/lib/api-data';
import { dataNews } from '@/utils/data'
import React from 'react'

async function Berita() {

    const dataBerita = await getData(process.env.API_URL + '/posts');

    const dataBeritas = dataBerita.map((item: any) => {
        return {
            id: item.id,
            title: item.name,
            description: item.description,
            img: item.imageUrl,
            date: item.createdAt,
            author: "admin",
        };
    });


    return (
        <LayoutComponent>
            <ShowAllCard
                items={dataBeritas}
                title='Berita Seputar Madrasah'
                subTitle='Beberapa program kegiatan di MDT Al Musyarokah'
                url='/berita'
            />
        </LayoutComponent>
    )
}

export default Berita