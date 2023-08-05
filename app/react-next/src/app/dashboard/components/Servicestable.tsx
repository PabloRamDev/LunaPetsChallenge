"use client"
import React from 'react'
//hooks
import { useAppSelector } from "@/redux/store"
import { useGetServicesDataQuery } from '@/redux/api'
//types

import ServiceCard from './ServiceCard'


const Servicestable = () => {
    const email: string = useAppSelector(( state ) => state.authReducer.value.email )
    const { data, isLoading, error } = useGetServicesDataQuery(email)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 bg-gray-100 dark:bg-slate-800 rounded-3xl items-center justify-center gap-5 grid-rows-auto w-full p-10'>
        {data?.map(e => {
                    return <ServiceCard key={e.id} props={e} />
                    
                    
                })}
    </div>
  )
}

export default Servicestable