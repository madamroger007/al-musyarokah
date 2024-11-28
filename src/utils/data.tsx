import { CuriculumItem, LightgalleryImage, VisiMisi } from "@/types/data";

export const dataCuriculum: CuriculumItem[] = [
  {
    id: 1,
    name: 'Fikih',
    description:
      'ilmu atau pengetahuan yang terkait dengan agama yang menggunakan metode ilmiah dalam perumusannya, ilmu yang dpelajari dari Al-quran dan sunah Nabi Muhammad.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Al-Quran',
    description:
      'Kitab suci yang dianugerahkan oleh Allah SWT kepada Nabi Muhammad SAW yang menjadi pedoman hidup manusia.',
    icon: (
      <svg
        viewBox="0 0 448 512"
        fill="currentColor"
        className="size-6"
      >
        <path d="M352 0c53 0 96 43 96 96v320c0 53-43 96-96 96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c-17.7 0-32-14.3-32-32V32C0 14.3 14.3 0 32 0h320zm0 384H96v64h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-77.9-233.8l-8.9 21.4-23.1 1.9c-5.7.5-8 7.5-3.7 11.2l17.6 15.1-5.4 22.6c-1.3 5.5 4.7 9.9 9.6 6.9l19.8-12.1 19.8 12.1c4.9 3 10.9-1.4 9.6-6.9l-5.4-22.6 17.6-15.1c4.3-3.7 2-10.8-3.7-11.2l-23.1-1.9-8.9-21.4c-2.2-5.3-9.6-5.3-11.8 0zM96 192c0 70.7 57.3 128 128 128 25.6 0 49.5-7.5 69.5-20.5 3.2-2.1 4.5-6.2 3.1-9.7s-5.2-5.6-9-4.8c-6.1 1.2-12.5 1.9-19 1.9-52.4 0-94.9-42.5-94.9-94.9s42.5-94.9 94.9-94.9c6.5 0 12.8.7 19 1.9 3.8.8 7.5-1.3 9-4.8s.2-7.6-3.1-9.7c-20-13-43.9-20.5-69.5-20.5-70.7 0-128 57.3-128 128z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Hadits',
    description:
      'Perkataan, perbuatan, dan pengakuan Nabi Muhammad SAW yang menjadi pedoman dan rujukan dalam beragama.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Aqidah',
    description:
      'Kepercayaan yang diyakini oleh seorang muslim dalam beragama yang wajib diyakini dan diyakini kebenarannya.',
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        className="size-6"

      >
        <path
          fillRule="evenodd"
          d="M10.354 6.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7 8.793l2.646-2.647a.5.5 0 01.708 0z"
        />
        <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Tarikh Islam',
    description:
      'Ilmu yang mempelajari sejarah Islam sejak periode Nabi Muhammad SAW hingga sekarang.',
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-6"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 14.5v-7l-5-5h-5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2z" />
          <path d="M11.5 6.5v4h3M5.5 4.5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2" />
        </g>
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Bahasa Arab',
    description:
      'Bahasa yang digunakan dalam Al-quran dan Hadits serta menjadi bahasa resmi di beberapa negara Arab.',
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-6"

      >
        <path d="M12 4c-1.92 0-3.5 1.58-3.5 3.5 0 .93.38 1.78 1 2.41-1.53 1-2.5 2.71-2.5 4.59 0 3.03 2.47 5.5 5.5 5.5 1.76 0 3.5-.46 5-1.34l-1-1.73c-1.22.7-2.6 1.07-4 1.07-1.94 0-3.5-1.55-3.5-3.5a3.49 3.49 0 012.59-3.38l5.21-1.4-.52-1.93L11.83 9c-.75-.1-1.33-.72-1.33-1.5 0-.84.66-1.5 1.5-1.5.26 0 .5.07.75.2l1-1.73C13.22 4.16 12.61 4 12 4z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: 'Akhlak',
    description:
      'Mata pelajaran yang membahas tentang tata cara berperilaku yang sesuai dengan nilai-nilai agama dan moral, serta berorientasi pada pengembangan akhlak mulia dan budi pekerti luhur.',
    icon: (
      <svg
        viewBox="0 0 576 512"
        fill="currentColor"
        className="size-6"
      >
        <path d="M80 96c26.5 0 48-21.5 48-48S106.5 0 80 0 32 21.5 32 48s21.5 48 48 48zm-16 32c-35.3 0-64 28.7-64 64v128c0 17.7 14.3 32 32 32 9.8 0 18.5-4.4 24.4-11.2l24 144.5c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8L123.1 352h15.7l30 134.9c3.8 17.3 20.9 28.1 38.2 24.3s28.1-20.9 24.3-38.2L174 215l116.3 53.8c.5.3 1.1.5 1.6.7 8.6 3.6 18 3.1 25.9-.7 3.4-1.6 6.6-3.9 9.3-6.7 3.1-3.2 5.5-7 7.1-11.4.1-.3.2-.7.3-1l2.5-7.5c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L537 232.7l-15.3-36.8c-17.2-41.1-57.4-67.9-102-67.9-22.8 0-45.3 4.8-66.1 14l-8 3.5a128.9 128.9 0 00-58.1 51.6l-130.2-60.2c-12.6-5.9-26.4-8.9-40.3-8.9H64zm400-32c26.5 0 48-21.5 48-48S490.5 0 464 0s-48 21.5-48 48 21.5 48 48 48zM349.7 335.6l-25 62.4-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l61.7-61.7c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6z" />
      </svg>
    ),
  },
];


export const DataNews = [{

}]

export const DataImg: LightgalleryImage[] = [
  {
    src: "/img/fasilitas/f1.jpeg",
    width: 1280,
    height: 780,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/img/fasilitas/f2.jpeg",
    width: 1280,
    height: 780,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/img/fasilitas/f3.jpeg",
    width: 1280,
    height: 780,

    caption: "After Rain (Jeshu John - designerspics.com)",
  }

]


export const DataVisiMisi: VisiMisi[] = [
  {
    type: "visi",
    title: "Visi Madrasah",
    item: [
      {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        ),
      },
      {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        ),
      },
    ],
  },

  {
    type: "misi",
    title: "Misi Madrasah",
    item: [
      {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        ),
      },
      {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        ),
      },
    ],
  },
];


export const dataNews = [
  { id: 1, img: '/img/elemen/bg.svg', title: 'Pengumuman', date: '20 Januari 2023', author: 'Admin' },
  { id: 2, img: '/img/elemen/bg.svg', title: 'Berita', date: '20 Januari 2023', author: 'Admin' },
  { id: 3, img: '/img/elemen/bg.svg', title: 'Kegiatan', date: '20 Januari 2023', author: 'Admin' },
  { id: 4, img: '/img/elemen/bg.svg', title: 'Prestasi', date: '20 Januari 2023', author: 'Admin' },
  { id: 5, img: '/img/elemen/bg.svg', title: 'Berita', date: '20 Januari 2023', author: 'Admin' },
  { id: 6, img: '/img/elemen/bg.svg', title: 'Kegiatan', date: '20 Januari 2023', author: 'Admin' },
  { id: 7, img: '/img/elemen/bg.svg', title: 'Prestasi', date: '20 Januari 2023', author: 'Admin' },
  { id: 8, img: '/img/elemen/bg.svg', title: 'Berita', date: '20 Januari 2023', author: 'Admin' },
  { id: 9, img: '/img/elemen/bg.svg', title: 'Kegiatan', date: '20 Januari 2023', author: 'Admin' },
  { id: 10, img: '/img/elemen/bg.svg', title: 'Prestasi', date: '20 Januari 2023', author: 'Admin' },
]