import LayoutComponent from '@/components/LayoutComponent'
import ShowAllCard from '@/components/pages/program/ShowAllCard'
import { dataNews } from '@/utils/data'
import React from 'react'

function Berita() {
    return (
        <LayoutComponent>
            <ShowAllCard
                items={dataNews}
                title='Berita Seputar Madrasah'
                subTitle='Beberapa program kegiatan di MDT Al Musyarokah'
            />
        </LayoutComponent>
    )
}

export default Berita