import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({ 
  weight: '400',
  subsets: ['latin'] }
  )



export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center justify-center md:px-20 relative ">
      
      <section className='grid grid-cols-2 justify-around items-center gap-10 h-auto w-full p-10'>

        <div className='row-span-1 col-span-2 md:col-span-1 justify-self-end'>
          <h1 className={`${lilita.className} text-5xl lg:text-7xl mb-5`}>
            Show your <span className='text-red-400'>pets</span> the love they 
            <span className='text-red-400'> deserve</span>
          </h1>
          <p className='text-slate-500'>
           {"At MyPetLife, we are dedicated to enhancing the lives of your beloved furry companions. Our website offers a wide range of pet services tailored to meet the unique needs of your pets."}
          
          </p>
        </div>
        <Image className='col-span-2 md:col-span-1 justify-self-end ' src={'/hero.png'} alt='pet owner'  height={350} width={350} />

       
       
      </section>
      
    </main>
  )
}
