import LayoutComponent from '@/components/LayoutComponent'
import FormKontak from '@/components/pages/kontak/FormKontak'
import Image from 'next/image'
import React from 'react'

function Kontak() {
    return (
        <LayoutComponent>
            <section className='py-20 md:px-20 px-10 grid md:grid-cols-2 grid-cols-1 gap-10'>
                <FormKontak />
                <Image src="/img/elemen/formkontak.svg" alt="logo" width={1280} height={1280} priority={true} className='md:p-20 p-5'/>
            </section>
        </LayoutComponent>
    )
}

export default Kontak