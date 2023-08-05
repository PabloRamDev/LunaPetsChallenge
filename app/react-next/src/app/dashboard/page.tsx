"use client"

import Servicestable from './components/Servicestable'
import { useAppSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'


export default function Page(){

    const { email , isLoading } = useAppSelector(state => state.authReducer.value)
    const router = useRouter()
    
    if(email){
        return <main className="p-5 flex w-full h-full">

        
        <section className="rounded-2xl w-full p-10">
            <h2 className="text-4xl mb-5">
                My Services
            </h2>
            <Servicestable />
        

        </section>
       
    </main>

    }else {
        router.push('/')
    }

   
}