import { SlicesState } from '@/redux/features/servicesSlice'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({ props }: { props: SlicesState }) => {
  return (
    <>
    <div className="max-w-sm col-span-1 bg-white border border-gray-200 rounded-lg dark:bg-cyan-900 shadow-lg justify-self-center">

        <img className="rounded-t-lg" src={ props.pet_img } alt={ props.pet_name } />
      
    <div className="p-5">
       
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title} <span className='ms-1 rounded-full px-2 py-1 text-white bg-purple-500 font-light text-xl'>{`$${props.price}`}</span></h5>    
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.pet_name}</p>
    
        <Link href={`/services/${props.id}`} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center ${props.status == 'pending' ? 'bg-red-700 rounded-full hover:bg-red-800' : 'bg-green-700 rounded-full hover:bg-green-800' } text-white  focus:ring-4 focus:outline-none focus:ring-blue-300`}>
        {props.status}
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
    </>
    
  )
}

export default ServiceCard