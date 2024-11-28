
import LayoutComponent from "@/components/LayoutComponent";
import About from "@/components/pages/home/About";
import BgHero from "@/components/pages/home/BgHero";
import Curiculum from "@/components/pages/home/Curiculum";
import Galeri from "@/components/pages/home/Galeri";
import News from "@/components/pages/home/News";
import { dataCuriculum, DataImg } from "@/utils/data";


export default function Home() {
  return (
    <LayoutComponent>

      <BgHero />
      <About />
      <Curiculum
        title={"Kurikulum Pembelajaran"}
        description="Beberapa kurikulum bahan ajar di MDT Al Musyarokah"
        items={dataCuriculum}
        key={"Kurikulum Pembelajaran"}
      />
      <News />
      <Galeri
        items={DataImg}
      />
    </LayoutComponent>
  );
}
