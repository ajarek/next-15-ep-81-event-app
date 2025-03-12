import React from 'react'
const About = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-8'>
      <h1 className={`text-4xl font-bold mb-6 `}>About us</h1>
      <div className='max-w-2xl text-center'>
        <p className='mb-4'>
          Welcome to our platform! We are committed to delivering innovative
          solutions and exceptional service to our customers.
        </p>
        <p className='mb-4'>
        Our team consists of passionate professionals who strive to provide the best possible experience for our users.
        </p>
        <p>
        Please feel free to contact us with any questions or comments. We are always here to help!
        </p>
      </div>
    </div>
  )
}
export default About
