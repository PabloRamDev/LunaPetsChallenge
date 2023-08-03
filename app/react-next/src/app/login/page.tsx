"use client"
import Form from "./Form"
import Header from "../components/Header"
import Image from "next/image"
export default function Page(){
    return <main className="grid  bg-white grid-cols-2 h-auto gap-5 justify-center items-center p-10">
        <div className="flex col-span-2 sm:col-span-1 flex-col relative h-auto bg-white rounded-3xl p-10 ">
        <h1 className="font-bold text-3xl">
            Login
        </h1>
        <Image style={{borderRadius: '80'}} src='/loginimage.webp' height={600} width={600} alt="cat-image" />
        </div>
        
        <Form />
        
        </main>
}