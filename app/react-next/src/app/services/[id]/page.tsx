"use client"
//hooks
import { useAppSelector } from "@/redux/store"
import { useRouter } from "next/navigation"
//types
import type { SlicesState } from "@/redux/features/servicesSlice"


export default function Page({params} : {
    params: {id: string}
   
}){
  const router = useRouter()
  const data: SlicesState = useAppSelector(state => state.servicesReducer.value.find(service => service.id == params.id))
  if(!data){
    router.push('/login')
  }
  return (<h1>ID:{data.pet_name}</h1>)
}