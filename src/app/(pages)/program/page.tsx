import LayoutComponent from '@/components/LayoutComponent'
import ShowAllCard from '@/components/pages/program/ShowAllCard'
import { getData } from '@/lib/api-data';
import { dataNews } from '@/utils/data'
import React from 'react'

async function Program() {

  const dataProgram = await getData(process.env.API_URL + '/program');

  const dataPrograms = dataProgram.map((item:any) => {
    return {
      id: item.id,
      title: item.name,
      description: item.description,
      img: item.imageUrl,
      date: item.createdAt,
      author: "admin",
    };
  });
  
  return (
    <LayoutComponent>
      <ShowAllCard
        items={dataPrograms}
        title='Program Madrasah'
        subTitle='Beberapa program di MDT Al Musyarokah'
        url='/program'
      />
    </LayoutComponent>
  )
}

export default Program