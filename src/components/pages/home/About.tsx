import Image from 'next/image'
import React from 'react'
import {
  PlayIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'


function About() {
  return (
    <div className="w-full py-20  bg-gradient-to-l from-[#edfefc] to-[#fef6ec] justify-center items-center inline-flex">
      <div className="flex md:flex-row flex-col-reverse px-[18px]  gap-[15px]">
        <div className="w-full relative ">
          <Image src="/img/elemen/aboutBg.svg" alt="logo" width={1280} height={1280} priority={true} />
        </div>
        <div className="w-full relative">
          <h1 className=" text-black text-4xl font-bold font-['Fredoka'] leading-[45.18px] tracking-wide">About Madrasah</h1>
          <p className=" text-black text-xl font-normal font-['Fredoka'] leading-[33.10px] tracking-wide">Keberanian bukan selalu tentang aksi besar, terkadang itu berarti mencoba hal baru, menjawab pertanyaan sulit, atau memberikan jawaban saat pelajaran ketika Anda benar-benar berusaha.</p>

          <div className="relative w-full p-2 bg-[#19c1b6] rounded-[32px] flex justify-center items-center text-center">

            <div className=" ">
              <h1 className="  text-white text-[32px] font-bold font-['Fredoka'] leading-10 tracking-wide">180+</h1>
              <p className=" text-center text-white text-xl font-normal font-['Fredoka'] leading-[31.10px] tracking-wide">Jumlah Siswa</p>
            </div>
            <div className="w-[53.80px] h-[0px]  rotate-90 border border-[#50d5cc]"></div>
            <div className=" ">
              <h1 className="  text-white text-[32px] font-bold font-['Fredoka'] leading-10 tracking-wide">16+</h1>
              <p className=" text-center text-white text-xl font-normal font-['Fredoka'] leading-[31.10px] tracking-wide">Tahun didirikan</p>
            </div>
            <div className="w-[53.80px] h-[0px]  rotate-90 border border-[#50d5cc]"></div>
            <div className=" ">
              <h1 className="  text-white text-[32px] font-bold font-['Fredoka'] leading-10 tracking-wide">14+</h1>
              <p className="  text-center text-white text-xl font-normal font-['Fredoka'] leading-[31.10px] tracking-wide">Staff Pengajar</p>
            </div>
          </div>
          <div className="relative flex justify-center items-center w-full my-20">

            <Link href="/profil" className="w-[287px] h-[76px]  bg-[#fea439] rounded-[42px] flex justify-center items-center">
              <p className="  text-white text-2xl font-medium font-['Fredoka'] leading-[37.32px] tracking-wide">Lihat Selengkapnya</p>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About