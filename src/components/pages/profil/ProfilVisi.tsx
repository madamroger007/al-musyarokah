import { VisiMisi } from '@/types/data'
import React from 'react'
interface ProfilVisiMisiProps {
    items: VisiMisi
}
function ProfilVisiMisi(props: ProfilVisiMisiProps) {
    const { items } = props

    return (
        <section className="bg-white md:py-20 py-10">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">{items.title} </h1>

                            <div className="mt-2">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            </div>
                        </div>


                        {items.item.map(item => (

                            <div className="md:flex md:items-start md:-mx-4" key={item.id}>
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    {item.icon}
                                </span>

                                <div className="md:mx-4 md:mt-0">

                                    <p className=" text-gray-500 dark:text-gray-300 font-semibold">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="" />
                    </div>
                </div>

                <hr className="my-12 border-gray-200 dark:border-gray-700" />


            </div>
        </section>
    )
}

export default ProfilVisiMisi