"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Lilita_One } from 'next/font/google'
import { useDispatch } from 'react-redux'
import { useAppSelector, AppDispatch } from '@/redux/store'
import { logOut } from '@/redux/features/authSlice'




const lilita = Lilita_One({ 
    weight: '400',
    subsets: ['latin'] }
    )

const Header = () => {
    //we use useSelector to grab the 
    const email = useAppSelector((state) => state.authReducer.value.email) 
    const dispatch = useDispatch<AppDispatch>()

  return (
    <header className='flex items-center justify-between w-full p-5 mb-5'>
    <Link href={'/'} className='flex items-center gap-3'>
      <Image src={'/petlogo.png'} height={50} width={50} alt='paw logo'/>
     
    <h3 className={`${lilita.className} text-2xl hidden sm:block`}>MYPETLIFE</h3>
    </Link>
    
    <nav className='flex items-center gap-5'>
        {
            email !== ""  ? 
            <> 
                <Link href={'/dashboard'}className='px-5 py-3'>
                {'dashboard'}
                </Link>
                <button className='flex flex-col items-center rounded-full bg-red-500 px-5 py-2' onClick={()=> dispatch(logOut())}>
                    {email}
                    <p>
                        logout
                    </p>
                </button>
            </> :  
            <Link href={'/login'}className='rounded-full bg-red-500 px-5 py-3'>
login
</Link>
        }
     
</nav>
  </header>
  )
}

export default Header