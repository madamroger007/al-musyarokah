"use client"
import Link from 'next/link'
import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import { LightgalleryImage } from '@/types/data';
import { RenderImageContext, RenderImageProps, RowsPhotoAlbum } from "react-photo-album";
import Image from 'next/image';

type Props = {
    classNames?: string;
    items: LightgalleryImage[]
}


function Galeri(props: Props) {
    const [index, setIndex] = React.useState(-1);

    return (
        <div className=" relative bg-white grid md:grid-cols-2 grid-cols-1 py-20">
            <div className="px-10 py-4 grid justify-start items-start gap-5 ">
                <div className=" text-[#0d1322] text-5xl font-bold font-['Poppins']">Galeri Sekolah</div>
                <div className=" text-black text-2xl font-normal font-['Fredoka'] leading-[41.16px] tracking-wide">Melihat galeri Kegiatan Sekolah yang berlangsung di Madrasah yang berisi berbagai macam kegiatan</div>
                <Link href={"/galeri"} className="max-w-72 py-3 px-2 text-white text-lg font-bold font-['Inter'] bg-[#00695c] text-center rounded-3xl">Lihat Semua Galeri</Link>
            </div>

            <RowsPhotoAlbum
                photos={props.items}
                spacing={2}
                skeleton={3}
                rowConstraints={{ maxPhotos: 6 }}
                onClick={({ index: current }) => setIndex(current)}
                
                sizes={{
                    size: "1168px",
                    sizes: [
                        { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
                    ],
                }}
            />

            <Lightbox
                index={index}

                slides={props.items}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    )
}

export default Galeri