import React from 'react'
import { useAppSelector } from "@/redux/store"
import ServiceCard from "./ServiceCard"

const Servicestable = () => {
    const data = useAppSelector((state) => state.servicesReducer.value) 
  return (
    <div className='grid grid-cols-12 items-center justify-center gap-5 grid-rows-3 w-full'>
        {data?.map(e => {
                    return <ServiceCard key={e.id} props={e} />
                    
                    
                })}
    </div>
  )
}

export default Servicestable