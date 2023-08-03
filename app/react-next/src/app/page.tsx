import Image from 'next/image'
import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import Header from './components/Header'

const lilita = Lilita_One({ 
  weight: '400',
  subsets: ['latin'] }
  )

export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center p-10">
      
      <section className='grid grid-cols-12 justify-around items-center h-full w-full'>

        <div className='row-span-1 col-span-12 md:col-span-6'>
          <h1 className={`${lilita.className} text-7xl`}>
            Show your <span className='text-red-400'>pets</span> the love they 
            <span className='text-red-400'> deserve</span>
          </h1>
          <p>
           {"At MyPetLife, we are dedicated to enhancing the lives of your beloved furry companions. Our website offers a wide range of pet services tailored to meet the unique needs of your pets."}
          
          </p>
        </div>
        <Image className='col-span-12 md:col-span-6 justify-self-center ' src={'/heroimage.avif'} alt='pet owner' height={500} width={500}>

        </Image>
       
      </section>
      
    </main>
  )
}
