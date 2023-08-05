"use client"
//hooks
import { useState } from "react"
import { useAppSelector } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useGetSingleServiceDataQuery } from "@/redux/api"
//types
import type { SlicesState } from "@/redux/features/servicesSlice"
//components
import PayForm from "./components/PayForm"


const Page = ({params} : { params: {id: string}}) => {

  const {data, error} = useGetSingleServiceDataQuery(params.id)

  const [ checkout, setCheckout ] = useState<boolean>(false)

  return (
<div className="grid grid-cols-5 flex-col h-auto w-full gap-5 justify-center items-center px-10 py-5">
    
        <div className={`${data?.status === 'paid' ? 'sm:col-span-5' : 'sm:col-span-2' } h-full bg-white border border-gray-200 rounded-lg dark:bg-cyan-900 shadow-lg justify-self-center items-center`}>

          <img className="rounded-t-lg" src={data?.pet_img} alt={data?.pet_name} />

          <div className="p-5">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title} <span className='ms-1 rounded-full px-2 py-1 text-white bg-purple-500 font-light text-xl'>{`$${data?.price}`}</span> </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.pet_name}</p>



          {data?.status == 'pending' ? 
                    <button className='rounded-lg text-white bg-red-500 px-5' onClick={()=>setCheckout(true)}>pay</button> : 
                    <button className='rounded-lg text-white bg-green-500 px-5'>Paid</button> 

        }
         
          
        </div>
        </div>


{checkout ? <PayForm props={{id: data?.id, email: data?.user_email, price: data?.price}} /> : null}
</div>

  )
}

export default Page


