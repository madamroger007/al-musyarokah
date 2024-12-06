import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="w-full bg-white ">
            <div className="px-4 pt-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <h2 className=" text-2xl uppercase tracking-wide text-[#19c1b6]  font-bold font-['Fredoka'] "> MDT Al Musyarokah</h2>
                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Senin - Jumat: 10.00 - 18.00 WIB</li>
                            <li>Hari libur: 10.00 - 15.00 WIB</li>
                        </ul>
                        <ul className="mt-8 flex gap-6">
                            <li>
                                <Link
                                    href={`${process.env.INSTAGRAM}`}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`${process.env.GMAPS}`}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">GMaps</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`mailto:${process.env.GMAIL}`}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">GMail</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>


                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`https://api.whatsapp.com/send?phone=+${process.env.PHONE}&text=Halo%20MDT%20Al%20Musyarokah`}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Whatapps</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>



                                </Link>
                            </li>
                        </ul>
                    </div>
                    <section>
                        <h1 className="text-black text-3xl font-bold font-['Fredoka'] leading-[45.18px] tracking-wide">Quick Links</h1>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div>
                                <p className="font-medium text-gray-900">Tentang Kami</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href="/profil" className="text-gray-700 transition hover:opacity-75">Profil</Link>
                                    </li>

                                    <li>
                                        <Link href="/profil/visimisi" className="text-gray-700 transition hover:opacity-75">Visi Misi </Link>
                                    </li>

                                    <li>
                                        <Link href="/profil/sambutan" className="text-gray-700 transition hover:opacity-75">Sambutan</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Beranda</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href="/program" className="text-gray-700 transition hover:opacity-75"> Program</Link>
                                    </li>

                                    <li>
                                        <Link href="/berita" className="text-gray-700 transition hover:opacity-75">Berita </Link>
                                    </li>

                                    <li>
                                        <Link href="/galeri" className="text-gray-700 transition hover:opacity-75"> Galeri</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Kontak Kami</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href={`${process.env.GMAPS}`} className="text-gray-700 transition hover:opacity-75"> Bandung, Jawa Barat, Indonesia</Link>
                                    </li>

                                    <li>
                                        <Link  href={`https://api.whatsapp.com/send?phone=+${process.env.PHONE}&text=Halo%20MDT%20Al%20Musyarokah`} className="text-gray-700 transition hover:opacity-75">+62 88222423740 </Link>
                                    </li>

                                    <li>
                                        <Link href={`mailto:${process.env.GMAIL}`} className="text-gray-700 transition hover:opacity-75">malmusyarokah12@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <div className="w-full mt-12 py-12">
                <img src="/img/elemen/line-footer.png" alt="" className='w-full bg-repeat' />
            </div>
        </footer>

    )
}

export default Footer