import Image from 'next/image'
import React from 'react'

function ProfilHistory() {
    return (
        <div className="w-full py-20  ">
          
            <section className='px-10 grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className="w-full flex-col justify-center items-center inline-flex">
                    <Image src="/img/elemen/bg.svg" alt="logo" width={1280} height={1280} className='w-full' priority={true} />
                    <div className=" text-black text-[26px] font-medium font-['Fredoka'] leading-loose tracking-wide">Kepala Madrasah</div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-5 inline-flex">
                    <h2 className=" text-[#1dc1b6] text-2xl font-semibold font-['Fredoka'] leading-[30.12px] tracking-wide">MDT AL Musyarokah</h2>
                    <h1 className=" text-black text-4xl font-bold font-['Fredoka'] leading-[60.24px] tracking-wider">Sejarah Madrasah</h1>
                    <p className="text-[#333333] md:text-xl text-lg font-medium font-['Fredoka'] leading-loose tracking-wide"><q>Assalamualaikum warahmatullahi wabarakatuh. Salam sejahtera bagi kita semua. Saya berharap bahwa dengan adanya website MDT Al Musyarokah ini, kita dapat lebih mudah berkomunikasi dan berbagi informasi, serta dapat meningkatkan kualitas dan kesadaran kita terhadap pentingnya pendidikan. Saya berharap bahwa melalui website ini, kita dapat memperoleh manfaat dan kebermanfaatan yang lebih baik, serta dapat meningkatkan kualitas hidup kita dan masyarakat sekitar kita. Terima kasih.</q> </p>

                </div>

            </section>
        </div>
    )
}

export default ProfilHistory