import LayoutComponent from '@/components/LayoutComponent'
import Curiculum from '@/components/pages/home/Curiculum'
import ProfilCompany from '@/components/pages/profil/ProfilCompany'
import ProfilFasilitas from '@/components/pages/profil/ProfilFasilitas'
import ProfilHistory from '@/components/pages/profil/ProfilHistory'
import { dataCuriculum } from '@/utils/data'
import React from 'react'

function Profil() {
  return (
    <LayoutComponent>
      <ProfilCompany />
      <Curiculum 
        title={"Kurikulum Pembelajaran"}
        description="Beberapa kurikulum bahan ajar di MDT Al Musyarokah"
        items={dataCuriculum}
        key={"Kurikulum Pembelajaran"}
      />
      <ProfilFasilitas/>
    </LayoutComponent>
  )
}

export default Profil