'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,

  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingOfficeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const profile = [
  { name: 'sambutan', description: 'Sambutan dari kepala madrasah', href: '/profil/sambutan', icon: ChatBubbleBottomCenterTextIcon },
  { name: 'profil', description: 'Tentang Madrasah', href: '/profil', icon: BuildingOfficeIcon },
  { name: 'visi & misi', description: 'Visi & Misi', href: '/profil/visimisi', icon: DocumentTextIcon },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname();
  return (
    <header className="bg-white fixed  w-full z-20">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 ">
            <span className="sr-only">MDT Al Musyarokah</span>
            <img
              alt="MDT"
              src="/img/icon/logo.png"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm/6 font-semibold text-gray-900">
            Beranda
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Profil
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {profile.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </PopoverPanel>
          </Popover>

          <Link href="program" className="text-sm/6 font-semibold text-gray-900">
            Program Kegiatan
          </Link>
          <Link href="/berita" className="text-sm/6 font-semibold text-gray-900">
            Informasi
          </Link>
          <Link href="/galeri" className="text-sm/6 font-semibold text-gray-900">
            Galeri
          </Link>
          <Link href="/kontak" className="text-sm/6 font-semibold text-gray-900">
            Kontak Kami
          </Link>
        </PopoverGroup>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/img/icon/logo.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Beranda
                </Link>
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1  text-base/7 font-semibold text-gray-900">
                    Profil
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-4">
                      {profile.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                        >
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                          </div>
                          <div className="flex-auto">
                            <Link href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </PopoverPanel>
                </Popover>
                <Link
                  href="program"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Program Kegiatan
                </Link>
                <Link
                  href="berita"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Berita
                </Link>
                <Link
                  href="galeri"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Galeri
                </Link>
                <Link
                  href="kontak"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Kontak Kami
                </Link>
              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
