import LayoutComponent from '@/components/LayoutComponent'
import Image from 'next/image'
import React from 'react'

function Sambutan() {
    return (
        <LayoutComponent>
            <div className="w-full py-20 bg-gradient-to-l from-[#edfefc] to-[#fef6ec] ">
                <div className="w-full py-10">
                    <img src="/img/elemen/line-footer.png" alt="" className='w-full ' />
                </div>
                <section className='px-10 grid md:grid-cols-2 grid-cols-1 gap-10'>

                    <div className="w-full flex-col justify-center items-start gap-5 inline-flex">
                        <h2 className=" text-[#1dc1b6] text-2xl font-semibold font-['Fredoka'] leading-[30.12px] tracking-wide">MDT AL Musyarokah</h2>
                        <h1 className=" text-black text-4xl font-bold font-['Fredoka'] leading-[60.24px] tracking-wider">Sambutan Madrasah</h1>
                        <p className="text-[#333333] md:text-xl text-lg font-medium font-['Fredoka'] leading-loose tracking-wide"><q>Assalamualaikum warahmatullahi wabarakatuh,

                            Salam sejahtera bagi kita semua.

                            Puji syukur kita panjatkan ke hadirat Allah SWT, yang telah memberikan kita kesempatan untuk terus memperbaiki diri dalam setiap aspek kehidupan, termasuk dalam meningkatkan pendidikan agama. Melalui sarana informasi Al Musyarokah ini, saya berharap kita semua dapat semakin mudah berkomunikasi, berbagi pengetahuan, dan memperdalam ilmu agama.

                            Sarana ini bukan hanya sebagai wadah untuk menyebarkan informasi, tetapi juga sebagai tempat untuk meningkatkan kesadaran kita akan pentingnya pendidikan agama dalam membentuk karakter dan kualitas hidup yang lebih baik. Semoga dengan adanya sarana ini, kita semua dapat memperoleh manfaat yang lebih besar, serta dapat mengaplikasikan ilmu agama dalam kehidupan sehari-hari, demi kesejahteraan diri sendiri dan masyarakat sekitar.

                            Terima kasih atas perhatian dan dukungannya. Semoga Allah SWT senantiasa memberi petunjuk dan keberkahan dalam setiap langkah kita.

                            Wassalamualaikum warahmatullahi wabarakatuh.</q> </p>

                    </div>
                    <div className="w-full flex-col justify-center items-center inline-flex">
                        <Image src="/img/elemen/bg.svg" alt="logo" width={1280} height={1280} className='w-full' priority={true} />
                        <div className=" text-black text-[26px] font-medium font-['Fredoka'] leading-loose tracking-wide">Kepala Madrasah</div>
                    </div>
                </section>
            </div>
        </LayoutComponent>
    )
}

export default Sambutan