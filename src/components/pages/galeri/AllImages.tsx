"use client"
import { LightgalleryImage } from '@/types/data'
import { DataImg } from '@/utils/data'
import React from 'react'
import { RowsPhotoAlbum } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
interface Props {
    items: LightgalleryImage[]
}
function AllImages({ items }: Props) {
    const [index, setIndex] = React.useState(-1);
    return (
        <section className='py-20 w-full text-center grid gap-10'>
            <h1 className="text-[#0d1322] text-[40px] font-bold font-['Poppins']">Galeri Madrasah</h1>
            <RowsPhotoAlbum photos={items} spacing={1} skeleton={3} onClick={({ index: current }) => setIndex(current)} />
            <Lightbox
                index={index}

                slides={items}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </section>
    )
}

export default AllImages