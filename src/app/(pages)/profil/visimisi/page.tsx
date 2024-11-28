import LayoutComponent from '@/components/LayoutComponent'
import ProfilVisi from '@/components/pages/profil/ProfilVisi'
import { DataVisiMisi } from '@/utils/data'
import React from 'react'

function VisiMisi() {
  const filteredDataVisi = DataVisiMisi.find((item) => item.type === 'visi');
  const filteredDataMisi = DataVisiMisi.find((item) => item.type === 'misi');
  console.log(filteredDataVisi)
  return (
    <LayoutComponent>
          {filteredDataVisi && <ProfilVisi items={filteredDataVisi} />}
          {filteredDataMisi && <ProfilVisi items={filteredDataMisi} />}☻
    </LayoutComponent>
  )
}

export default VisiMisi