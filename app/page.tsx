import HeroSection from '@/components/HeroSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-start items-center '>
      <div className='relative flex  items-center '>
        <Image src='/hero/hero-bg1.png' alt='hero' width={720} height={760} className=''/>
        <Image src='/hero/hero-bg2.png' alt='hero' width={720} height={760} className=''/>
        <div className='absolute w-full h-full bg-zinc-900 opacity-50'></div>
      </div>
      <HeroSection />
    
    </div>
  )
}
