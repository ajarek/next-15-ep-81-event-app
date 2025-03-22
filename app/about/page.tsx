import Image from 'next/image'
import React from 'react'
const About = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center pt-16 px-16 max-sm:px-4'>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 place-items-center gap-4'>
        <div>
          <Image
            src='/hero/hero-bg2.png'
            alt='about'
            width={400}
            height={400}
            className='rounded-xl'
          />
        </div>
        <div className='max-w-2xl flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-semibold mb-4'>About us</h1>
          <p className='mb-4'>
            Welcome to our platform! We are committed to delivering innovative
            solutions and exceptional service to our customers.
          </p>
          <p className='mb-4'>
            Our team consists of passionate professionals who strive to provide
            the best possible experience for our users.
          </p>
          <p>
            Please feel free to contact us with any questions or comments. We
            are always here to help!
          </p>
          <p></p>
        </div>
      </div>
    </div>
  )
}
export default About
