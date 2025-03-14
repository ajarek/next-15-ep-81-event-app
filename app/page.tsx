import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import dataEvents from '@/public/db.json'
export default async function Home({searchParams,}: {searchParams: Promise<{event: string, location: string, name: string, time: string  }>}) {
  const { event, location, name, time } = (await searchParams) || {}
  console.log(dataEvents)
  return (
    <div className='min-h-screen flex flex-col justify-start items-center '>
      <div className='relative flex  items-center '>
        <Image src='/hero/hero-bg1.png' alt='hero' width={720} height={760} className='max-sm:hidden'/>
        <Image src='/hero/hero-bg2.png' alt='hero' width={720} height={760} className=''/>
        <div className='absolute w-full h-full bg-zinc-900 opacity-50'></div>
      </div>
      <HeroSection />
      <div>
        {dataEvents
        .filter(item => item.location===location || !location)
        .filter(item => item.type===event || !event)
        .filter(item => item.title.includes(name) || !name)
         .filter(item => item.date===time || !time)
        .map(item => (
         <div key={item.id}>
          <p>{item.title}</p>
         </div>
        ))}
      </div>
     
      
    </div>
  )
}
