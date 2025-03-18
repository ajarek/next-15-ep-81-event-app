import type { Metadata } from 'next'
import {
  Lato,
  Montserrat,
  Open_Sans,
  Playfair,
  Poppins,
  Raleway,
  Roboto,
  Caveat
} from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

export const caveat = Caveat({
  weight: ['400','500','600', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
})


const playfairDisplay = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Event App', // Placeholder for title
  description: 'Event', // Placeholder for description
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${poppins.variable} 
         ${caveat.variable}
         ${roboto.variable} ${openSans.variable} 
         ${montserrat.variable} ${raleway.variable} 
         ${lato.variable} ${playfairDisplay.variable} 
          antialiased relative`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className={`max-w-7xl w-full mx-auto ${lato.className}`}>
            <Navbar />
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
