import React from 'react'
import AppLogo from './AppLogo'
import Image from 'next/image'
import ContactForm from './ContactForm'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full   px-4 sm:px-6 rounded-sm '>
      <div className='flex flex-col justify-center items-center  px-4 gap-2 pb-4'>
        <h1 className='text-2xl font-bold'>Your Event Connection</h1>
        <p>Join our list for exclusive event updates and insider tips.</p>
        <ContactForm />
        <div className='flex items-center gap-8 px-6 py-2 bg-primary rounded-xl '>
          <Image
            src='/footer/instagram.svg'
            alt='social'
            width={30}
            height={30}
          />
          <Image
            src='/footer/pinterest.svg'
            alt='social'
            width={30}
            height={30}
          />
          <Image
            src='/footer/facebook.svg'
            alt='social'
            width={30}
            height={30}
          />
          <Image
            src='/footer/x.svg'
            alt='social'
            width={30}
            height={30}
          />
          <Image
            src='/footer/youtube.svg'
            alt='social'
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
        <AppLogo />

        <div className='text-xs text-center sm:text-right p-4'>
          <p>Copyright © {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
