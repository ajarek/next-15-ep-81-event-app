'use client'
import React, { use } from 'react'
import dataEvents from '@/public/db.json'
import Image from 'next/image'
import {
  CalendarDays,
  CircleCheckBig,
  Dot,
  MapPin,
  ShoppingBag,
  Tickets,
} from 'lucide-react'
import CountdownTimer from '@/components/CountdownTimer'
import SelectSeats from '@/components/SelectSeats'
import SelectQuantity from '@/components/SelectQuantity'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

const EventId = ({
  searchParams,
}: {
  searchParams: Promise<{ id: string; seat_price: string; quantity: string }>
}) => {
  const { addItemToCart, items } = useCartStore()
  const router = useRouter()
  const { id, seat_price, quantity } = use(searchParams)
  const event = dataEvents.find((event) => event.id === id)
  const { toast } = useToast()

  return (
    <div className='min-h-screen grid grid-cols-2 max-lg:grid-cols-1 gap-8 pt-16 place-items-center  px-8 max-sm:px-4'>
      <div className='relative w-full h-[400px] '>
        <Image
          src={event?.img_lg || ''}
          alt={event?.title || ''}
          fill
          objectFit='cover'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <SelectSeats
          query='seat_price'
          array={event?.seats || []}
        />
        <div className='w-full flex items-center gap-8'>
          <SelectQuantity query='quantity' />

          {seat_price ? (
            <div className='flex items-center py-2 px-6 rounded-2xl gap-2 bg-primary'>
              <Tickets />
              {quantity} x ticket(s) - $
              {Number(seat_price?.replace(/\D/g, '')) * Number(quantity)}
            </div>
          ) : null}
        </div>
        {seat_price && (
          <Button
            onClick={() => {
              if (items.some((i) => i.id === event?.id)) {
                toast({
                  variant: 'destructive',
                  title: 'The item is already in your cart!',
                })
                return
              }
              addItemToCart({
                id: event?.id || '',
                title: event?.title || '',
                img_sm: event?.img_sm || '',
                price: seat_price?.replace(/\D/g, ''),
                quantity: quantity,
                type: event?.type || '',
                location: event?.location || '',
                date: event?.date || '',
                hour: event?.hour || '',
              })
              router.push('/')
            }}
            aria-label='Add to cart'
          >
            <ShoppingBag /> Add to cart
          </Button>
        )}
      </div>

      <div className='w-full flex flex-col justify-start gap-4 px-8 '>
        <h2 className='text-2xl'>Description</h2>
        <p>{event?.description}</p>
        <h2 className='text-2xl'>Requiremenys for the event</h2>
        <div className='flex items-center gap-2 '>
          <CircleCheckBig color={'#ea580c'} /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </div>
        <div className='flex items-center gap-2 '>
          <CircleCheckBig color={'#ea580c'} /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </div>
        <div className='flex items-center gap-2 '>
          <CircleCheckBig color={'#ea580c'} /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </div>
        <div className='flex items-center gap-2 '>
          <CircleCheckBig color={'#ea580c'} /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </div>
      </div>
      <div className='w-full flex flex-col justify-start gap-4 pr-8 '>
        <h2 className='text-2xl'>Organizers</h2>
        {event?.organizers.map((organizer, index) => (
          <div
            key={index}
            className='flex items-center gap-12 '
          >
            <Image
              src={organizer?.img_avatar || ''}
              alt={organizer?.name || ''}
              width={70}
              height={70}
              className='rounded-full'
              priority
            />
            <div className='flex flex-col items-center gap-1'>
              <div>{organizer?.name}</div>
              <div className='text-primary'>{organizer?.job}</div>
              <div className='flex items-center gap-2'>
                {organizer?.social.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 '
                  >
                    <Image
                      src={item.icon || ''}
                      alt='social icon'
                      width={20}
                      height={20}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventId
