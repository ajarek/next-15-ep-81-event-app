import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import dataEvents from '@/public/db.json'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarDays, Clock } from 'lucide-react'
import Link from 'next/link'




export default async function Home({searchParams,}: {searchParams: Promise<{event: string, location: string, name: string, time: string  }>}) {
  const { event, location, name, time } = (await searchParams) || {}

  return (
    <div className='min-h-screen flex flex-col justify-start items-center gap-4 max-sm:pt-16'>
      <div className='relative flex  items-center max-w-7xl w-full mx-auto rounded-sm overflow-hidden'>
        <Image src='/hero/hero-bg1.png' alt='hero' width={640} height={675} className='max-sm:hidden'/>
        <Image src='/hero/hero-bg2.png' alt='hero' width={640} height={675} className=''/>
        <div className='absolute w-full h-full bg-zinc-900 opacity-50'></div>
      <HeroSection />
      </div>
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 max-sm:gap-4'>
        {dataEvents
        .filter(item => item.location===location || !location)
        .filter(item => item.type===event || !event)
        .filter(item => item.title.includes(name) || !name)
         .filter(item => item.date===time || !time)
        .map(item => (
          <Card key={item.id} className='max-sm:w-full'>
            <Link href={`/event?id=${item.id}`}>
    <CardHeader className='relative flex justify-center items-center'>
      <Image src={item.img_sm} alt={item.title} width={400} height={400} className='rounded-xl'/>
      <div className='absolute bottom-0 left-6 max-sm:left-10 w-20 py-2 px-4 bg-primary text-white text-center rounded-xl'>{item.type}</div>
    </CardHeader>
    <CardContent>
      <div className='flex gap-2 items-center text-primary mt-4'><CalendarDays/>{item.date} <Clock />{item.hour}</div>
    <CardTitle className='text-xl mt-4'>{item.title}</CardTitle>
    </CardContent>
    <CardFooter>
      <p>{item.location}</p>
    </CardFooter>
    </Link>
  </Card>
        ))}
      </div>
     
      
    </div>
  )
}
