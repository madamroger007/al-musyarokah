
import LayoutComponent from '@/components/LayoutComponent'
import AllImages from '@/components/pages/galeri/AllImages'
import { getData } from '@/lib/api-data';

import React from 'react'


async function Galeri() {
    const dataGaleri = await getData(process.env.API_URL + '/galeri');
    const DataImgGaleri = dataGaleri.map((item: any) => {
        return {
            src: item.imageUrl,
            width: 1280,
            height: 720,
            caption: item.description,
        };
    });

    console.log(dataGaleri)

    return (
        <LayoutComponent>
            <AllImages items={DataImgGaleri} />
        </LayoutComponent>
    )
}

export default Galeri