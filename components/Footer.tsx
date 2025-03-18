// components/Footer.jsx
import React from 'react';

import AppLogo from './AppLogo';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-2 border-primary py-4 px-4 sm:px-6 rounded-sm mt-8">
      <div className='flex justify-center items-center flex-col p-4 gap-6'>
        <h1 className='text-2xl font-bold'>Your Event Connection</h1>
        <p>Join our list for exclusive event updates and insider tips.</p>
        <form className='w-1/4 flex items-center gap-4'>
        <Input type="email" placeholder="Enter your email"/>
         <Button>JOIN</Button>   
        </form>
        <div className='flex items-center gap-8 px-6 py-2 bg-primary rounded-xl '>
          <Image src='/footer/instagram.svg' alt='social' width={30} height={30}/>
          <Image src='/footer/pinterest.svg' alt='social' width={30} height={30}/>
          <Image src='/footer/facebook.svg' alt='social' width={30} height={30}/>
          <Image src='/footer/x.svg' alt='social' width={30} height={30}/>
          <Image src='/footer/youtube.svg' alt='social' width={30} height={30}/>
          
        </div>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <AppLogo />

        <div className="text-xs text-center sm:text-right">
          <p>Copyright © {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;