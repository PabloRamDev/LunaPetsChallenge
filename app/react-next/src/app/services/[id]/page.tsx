"use client"
//hooks
import { useAppSelector } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useGetSingleServiceDataQuery } from "@/redux/api"
//types
import type { SlicesState } from "@/redux/features/servicesSlice"
//components
import Card from "./components/Card"
import PayForm from "./components/PayForm"

export default function Page({params} : {
    params: {id: number}
   
}){
  const router = useRouter()
  const {data, isLoading, error} = useGetSingleServiceDataQuery(params.id)

  if(error){
    router.push('/login')
  }else{
    return (
      <main className="grid grid-cols-2 flex-col h-auto gap-5 justify-center items-center p-5">
        {data && <Card props={data} />}
        {data?.status == 'pending' ? <PayForm props={data} /> : null}
    </main>
    )

  }
 
}