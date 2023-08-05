"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { useAppSelector, AppDispatch } from '@/redux/store'
import { logOut } from '@/redux/features/authSlice'
import { Lilita_One } from 'next/font/google'




const latita = Lilita_One({ 
    weight: '400',
    subsets: ['latin'] }
    )

const Header = () => {
    //we use useSelector to grab the 
    const email = useAppSelector((state) => state.authReducer.value.email) 
    const dispatch = useDispatch<AppDispatch>()

  return (
    <header className='flex items-center justify-between p-3 w-full md:py-5 md:px-10'>
    <Link href={'/'} className='flex items-center gap-3'>
      <Image src={'/petlogo.png'} height={50} width={50} alt='paw logo'/>
     
    <h3 className={`${latita.className} text-2xl hidden sm:block`}>MYPETLIFE</h3>
    </Link>
    
    <nav className='flex items-center gap-5'>
        {
            email !== ""  ? 
            <> 
                <Link href={'/dashboard'}className='px-5 py-3 hover:text-red-500 font-black duration-200 '>
                {'DASHBOARD'}
                </Link>
                <button className={` flex flex-col border-2 border-red-500 items-center rounded-full px-5 py-2`} onClick={()=> dispatch(logOut())}>
                    {email}
                    <p className='bg-red-400 rounded-full px-2 text-white'>
                        logout
                    </p>
                </button>
            </> :  
            <Link href={'/login'}className={`${latita.className}flex flex-col text-white items-center rounded-full bg-red-500 hover:bg-red-700 px-5 py-2`}>
login
</Link>
        }
     
</nav>
  </header>
  )
}

export default Header