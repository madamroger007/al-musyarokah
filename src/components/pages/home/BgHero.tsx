import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BgHero() {
  return (
    <div className="w-full py-20  bg-gradient-to-l from-[#edfefc] to-[#fef6ec] grid gap-10">
      <div className="w-full py-10">
        <img src="/img/elemen/line-footer.png" alt="" className='w-full ' />
      </div>
      <section className='grid md:grid-cols-2 grid-cols-1 gap-10'>
        <div className="px-10 relative w-full flex flex-col md:items-start items-center justify-center">
          <h1 className="text-black text-5xl font-bold font-['Fredoka'] leading-[60.24px] tracking-wider">Menjadi Insan yang Beriman dan Berilmu</h1>
          <p className="text-[#1dc1b6] text-2xl font-semibold font-['Fredoka'] leading-[30.12px] tracking-wide">MDT Al Musyarokah</p>

          <Link href={"/profil"} className="w-[240px] h-[91px] bg-[#fea439] rounded-[94px] flex justify-center items-center my-10">
            <p className=" text-white text-[24px] font-medium font-['Fredoka']">Lihat Selengkapnya</p>
          </Link>
        </div>
        <div className="w-full ">

          <Image src="/img/elemen/bg.svg" alt="logo" width={1280} height={1280} priority={true} />
        </div>

      </section>

    </div>
  )
}

export default BgHero