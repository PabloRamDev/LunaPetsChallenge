"use client"
import * as react from 'react'
import {z} from 'zod'
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {logIn} from '@/redux/features/authSlice'
import { Load } from '@/redux/features/servicesSlice'
import {useDispatch} from 'react-redux'
import { AppDispatch } from '@/redux/store'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const validationSchema = z
.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
})

type ValidationSchema = z.infer<typeof validationSchema>


const Form = () => {

    const [email,setEmail] = react.useState<string>('')

    const dispatch = useDispatch<AppDispatch>()

    const router = useRouter()

    
    
    const handleSubmit = async (data: string) => {
        
        
        await axios.get("http://localhost:8000/api/v1/services/", {
            params: {
                email: email
            }
        }).then(res => {
            if(res.status === 200 && res.data.length > 0){
                dispatch(logIn(email))
                dispatch(Load(res.data))
                router.push('/dashboard')
            }
            
        })

        
    };
    
  

  return (
    
    <form className='flex flex-col col-span-2 sm:col-span-1 gap-5 h-full justify-end bg-white dar:bg-slate-700 p-20 rounded-3xl' onSubmit={e => {
        e.preventDefault()
        handleSubmit(email)}}>

        <label htmlFor="email">Email</label>
        <input 
            className='rounded-xl p-3 bg-slate-200' 
            type="email" 
            required 
            id="email" 
            placeholder='your email'
            onChange={e => setEmail(e.target.value)}
            
             />
        
        <button className='bg-red-500 rounded-full p-3' type="submit">Submit</button>


    </form>
  )
}

export default Form