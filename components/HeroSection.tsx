import { caveat } from '@/app/layout'

import Search from './Search'

const HeroSection = () => {
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3  flex flex-col items-center justify-center text-center  px-4  '>
      <p className={`${caveat.className} text-3xl text-primary`}>
        Uncover New Moments
      </p>
      <h1 className='text-4xl md:text-4xl font-bold mb-4 text-white'>
        DISCOVER EVENTS <br /> & EXPERIENCES
      </h1>
      <p className='text-lg text-gray-300 mb-8 mx-0 max-w-[600px]'>
        Join a vibrant community where you can explore global happenings and
        share memorable moments with friends and family.
      </p>
      <Search />
    </div>
  )
}
export default HeroSection
