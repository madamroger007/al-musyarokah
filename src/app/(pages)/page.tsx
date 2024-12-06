import Head from "next/head"; // Import Head untuk meta tag
import LayoutComponent from "@/components/LayoutComponent";
import About from "@/components/pages/home/About";
import BgHero from "@/components/pages/home/BgHero";
import Curiculum from "@/components/pages/home/Curiculum";
import Galeri from "@/components/pages/home/Galeri";
import News from "@/components/pages/home/News";
import { dataCuriculum, DataImg } from "@/utils/data";
import { getData } from "@/lib/api-data";
import { date } from "zod";

export default async function Home() {
  const dataBerita = await getData(process.env.API_URL + '/posts');
  const dataNews = dataBerita.map((item:any) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      img: item.imageUrl,
      date: item.createdAt,
      author: "admin",
    };
  });


  return (
    <>
      {/* Layout dan konten */}
      <LayoutComponent>
        <BgHero />
        <About />
        <Curiculum
          title="Kurikulum Pembelajaran"
          description="Beberapa kurikulum bahan ajar di MDT Al Musyarokah"
          items={dataCuriculum}
          key="Kurikulum Pembelajaran"
        />
        <News items={dataNews.slice(0, 6)} />
        <Galeri items={DataImg.slice(0, 6)} />

 
      </LayoutComponent>
    </>
  );
}
