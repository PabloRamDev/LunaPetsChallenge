"use client"

import { Lilita_One } from 'next/font/google'
import Servicestable from './components/Servicestable'



const lilita = Lilita_One({ 
    weight: '400',
    subsets: ['latin'] }
    )

export default function Page(){


    return <main className="p-5 flex w-full h-full">
        
        <section className="rounded-2xl w-full p-10">
            <h2 className={`${lilita.className} text-4xl mb-5`}>
                My Services
            </h2>
            <Servicestable />
        

        </section>
       
    </main>
}