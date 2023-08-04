"use client"

import Servicestable from './components/Servicestable'


export default function Page(){


    return <main className="p-5 flex w-full h-full">
        
        <section className="rounded-2xl w-full p-10">
            <h2 className="text-4xl mb-5">
                My Services
            </h2>
            <Servicestable />
        

        </section>
       
    </main>
}