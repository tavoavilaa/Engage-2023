
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const noto = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata = {
  title: 'Avaya ENGAGE® 2023',
  description: 'Avaya ENGAGE is the premier event for thousands looking to deliver experiences that matter. Attend exciting general sessions and hundreds of informational breakouts led by some of the industry’s most inspiring and accomplished leaders.',
}

export default function RootLayout({ children }) {

 

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="https://www.avaya.com/static/avaya/assets/images/favicon.png"/>
        <link rel='stylesheet' href="https://bootswatch.com/5/sketchy/bootstrap.min.css"></link>
      </head>
      <body className={`${noto.className}`}>
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
