import Image from 'next/image'
import React from 'react'

function ProfilCompany() {
    return (
        <div className="w-full py-20 bg-gradient-to-l from-[#edfefc] to-[#fef6ec] ">
            <div className="w-full py-10">
                <img src="/img/elemen/line-footer.png" alt="" className='w-full ' />
            </div>
            <section className='px-10 grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className="w-full flex-col justify-center items-start gap-5 inline-flex">
                    <h2 className=" text-[#1dc1b6] text-2xl font-semibold font-['Fredoka'] leading-[30.12px] tracking-wide">MDT AL Musyarokah</h2>
                    <h1 className=" text-black text-4xl font-bold font-['Fredoka'] leading-[60.24px] tracking-wider">Tentang Madrasah</h1>
                    <p className="text-[#333333] md:text-xl text-lg font-medium font-['Fredoka'] leading-loose tracking-wide">
                        Madrasah Diniyah Takmiliyah (MDT) Al - Musyarokah adalah lembaga pendidikan agama non formal yang didirikan pada tanggal 12 Agustus 2008 oleh Ketua DKM Bapak Zaenal dan sebagai kepala MDT adalah Lily Soemarti. MDT Al-Musyarokah  terletak di Komplek Sanggar Mas Lestari RW 12 Desa Tarajusari Kecamatan Banjaran Kabupaten Bandung. Merupakan sekolah agama non formal yang sampai sekarang dikepalai oleh Lily Sumarti membawai kelas ula dan wusto.  Kelas Ula setara dengan kelas TK, kelas 1, kelas 2, kelas 3, kelas 4, kelas 5 dan kelas 6. sedangkan kelas Wustho setara dengan SLTP. Pembelajaran di MDT berdasar kurikulum dari Kementrian Agama Republik Indonesia dan sudah mendapat Ijin Operasional dan no Statistik sejak tahun 2008.
                    </p>

                </div>
                <div className="w-full flex-col justify-center items-center inline-flex">
                    <Image src="/img/elemen/bg.svg" alt="logo" width={1280} height={1280} className='w-full' priority={true} />
                    <div className=" text-black text-[26px] font-medium font-['Fredoka'] leading-loose tracking-wide">MDT Al Musyarokah</div>
                </div>
            </section>
        </div>
    )
}

export default ProfilCompany