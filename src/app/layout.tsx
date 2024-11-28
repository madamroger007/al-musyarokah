import type { Metadata } from "next";
import "./globals.css";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "MDT Al-Musyarokah",
  description:
    "Madrasah Diniyah Takmiliyah Al-Musyarokah adalah lembaga pendidikan formal yang berbasis islam dan berorientasi pada pengembangan akhlak, ilmu pengetahuan, dan keterampilan.",
  keywords: [
    "Madrasah",
    "Diniyah",
    "Takmiliyah",
    "Al-Musyarokah",
    "al musyarokah",
    "musyarokah",
    "Pondok Pesantren",
    "Islamic Boarding School",
    "Pesantren",
    "Boarding School",
    "Islamic Education",
    "Education",
  ],
  authors: [
    {
      name: "Madamroger",
      url: "https://github.com/madamroger007",
    },
  ],
  creator: "Madamroger",
  publisher: "MDT Al-Musyarokah",
  openGraph: {
    title: "MDT Al-Musyarokah",
    description:
      "Madrasah Diniyah Takmiliyah Al-Musyarokah adalah lembaga pendidikan formal yang berbasis islam dan berorientasi pada pengembangan akhlak, ilmu pengetahuan, dan keterampilan.",
    url: "https://al-musyarokah.com",
    siteName: "MDT Al-Musyarokah",
    images: [
      {
        url: "https://al-musyarokah.com/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDT Al-Musyarokah",
    description:
      "Madrasah Diniyah Takmiliyah Al-Musyarokah adalah lembaga pendidikan formal yang berbasis islam dan berorientasi pada pengembangan akhlak, ilmu pengetahuan, dan keterampilan.",
    creator: "@madamroger",
    site: "@al_musyarokah",
    images: "/img/icon/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
