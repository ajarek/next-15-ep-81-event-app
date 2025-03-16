import React from 'react'
import dataEvents from '@/public/db.json'
import Image from 'next/image'
import { CalendarDays, Dot, MapPin } from 'lucide-react'
import CountdownTimer from '@/components/CountdownTimer'
import SelectSeats from '@/components/SelectSeats'
import SelectQuantity from '@/components/SelectQuantity'

const EventId = async ({searchParams}: {searchParams: Promise<{ id: string, seat_price: string, quantity: string }>}) => {

  const { id, seat_price, quantity   } = await searchParams
  const event = dataEvents.find((event) => event.id === id)

  return (
    <div className='min-h-screen grid grid-cols-2 max-lg:grid-cols-1 gap-4 pt-16 place-items-center p-4'>
      <div className='relative'>
        <Image
          src={event?.img_lg || ''}
          alt={event?.title || ''}
          width={500}
          height={500}
          className='rounded-lg'
          priority
        />
      </div>
      <div className='w-full flex flex-col justify-center items-start gap-8'>
        <h1 className='text-2xl font-bold'>{event?.title || ''}</h1>
        <div className='w-full flex items-center gap-8'>
          <p className='flex  items-center gap-2 '>
            <CalendarDays color={'#ea580c'} />
            {event?.date || ''}
            <Dot />
            {event?.hour}
          </p>
          <p className='flex  items-center gap-2 '>
            <MapPin color={'#ea580c'} />
            {event?.location || ''}
          </p>
        </div>
        <CountdownTimer date={event?.date || ''} /> 
        <SelectSeats query='seat_price' array={event?.seats || []}/>
        <div className='w-full flex items-center gap-8'>

        <SelectQuantity query='quantity'/>
        {seat_price?
        <div className='flex items-center py-2 px-6 rounded-2xl gap-2 bg-primary'>
          {quantity} x ticket(s) - ${Number(seat_price?.replace(/\D/g, ''))*Number(quantity)}
          </div>
          :null
          
          }
        </div>
      </div>
    </div>
  )
}

export default EventId
