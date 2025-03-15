import React from 'react'
import dataEvents from '@/public/db.json'
import Image from 'next/image'
import { CalendarDays, Dot, MapPin } from 'lucide-react'
const EventId = async ({searchParams}:{searchParams:Promise<{id:string}>}) => {
  const {id} = await searchParams
  const event= dataEvents.find(event => event.id === id)
  return (
    <div className='min-h-screen grid grid-cols-2 max-lg:grid-cols-1 gap-4 pt-16 place-items-center px-4'>
         <div className='relative'>
          <Image src={event?.img_lg || ''} alt={event?.title || ''} width={500} height={500} className='rounded-lg' priority/>
         </div>
         <div className='w-full flex flex-col justify-center items-start gap-4'>
          <h1 className='text-2xl font-bold'>{event?.title || ''}</h1>
          <div className='w-full flex items-center justify-between pr-8'>
          <p className='flex  items-center gap-2 '><CalendarDays color={'#ea580c'}/>{event?.date || ''}<Dot />{event?.hour}</p>
          <p className='flex  items-center gap-2 '><MapPin  color={'#ea580c'}/>{event?.location || ''}</p>

          </div>
         </div>
    </div>
  )
}

export default EventId