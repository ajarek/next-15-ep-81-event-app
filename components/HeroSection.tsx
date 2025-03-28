import { caveat } from '@/app/layout'
import SelectName from './SelectName'
import SelectLocation from './SelectLocation'
import SelectTime from './SelectTime'
import SelectEvent from './SelectEvent'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full   flex flex-col items-center justify-center text-center  px-4  '>
      <p
        className={`${caveat.className} text-3xl max-lg:text-2xl text-primary`}
      >
        Uncover New Moments
      </p>
      <h1 className='text-4xl max-lg:text-2xl font-bold mb-4 text-white'>
        DISCOVER EVENTS <br /> & EXPERIENCES
      </h1>
      <p className='text-lg max-sm:text-sm text-gray-300 mb-4 mx-0 max-w-[600px]'>
        Join a vibrant community where you can explore global happenings and
        share memorable moments with friends and family.
      </p>
      <div className='flex flex-wrap items-center gap-4 max-sm:gap-2 border border-primary py-2 px-4 rounded-xl'>
        <SelectName query='name' />
        <SelectLocation query='location' />
        <SelectTime query='time' />
        <SelectEvent query='event' />
        <Link href='/reset'>❌</Link>
      </div>
    </div>
  )
}
export default HeroSection
