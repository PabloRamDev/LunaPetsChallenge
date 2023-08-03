import './globals.css'
import type { Metadata } from 'next'
import { Poppins,Lilita_One } from 'next/font/google'
import Header from './components/Header'
import {ReduxProvider} from '@/redux/provider'

const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'] }
  )

const lilita = Lilita_One({ 
  weight: '400',
  subsets: ['latin'] }
    )
  

export const metadata: Metadata = {
  title: 'My Pet App',
  description: 'Manage your pet services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`text-slate-700 dark:text-gray-100 ${lilita.className} min-h-screen`}>
        <ReduxProvider>
          <Header />
        {children}
        </ReduxProvider>
        </body>
    </html>
  )
}
