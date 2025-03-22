'use client'
import React from 'react'

const CountdownTimer = ({ date }: { date: string }) => {
  const now = new Date()
  const target = date
  const difference = new Date(target).getTime() - now.getTime()

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return (
    <div className='grid grid-cols-4 gap-4 text-center'>
      <div className='w-20 h-20 flex flex-col items-center justify-center  rounded-full border border-primary'>
        <div className='text-2xl font-bold  '>{days || 0}</div>
        <div className=' uppercase text-xs'>Days</div>
      </div>
      <div className='w-20 h-20 flex flex-col items-center justify-center  rounded-full border border-primary'>
        <div className='text-2xl font-bold  '>{hours || 0}</div>
        <div className=' uppercase text-xs'>Hours</div>
      </div>
      <div className='w-20 h-20 flex flex-col items-center justify-center  rounded-full border border-primary'>
        <div className='text-2xl font-bold  '>{minutes || 0}</div>
        <div className=' uppercase text-xs'>Minutes</div>
      </div>
      <div className='w-20 h-20 flex flex-col items-center justify-center  rounded-full border border-primary'>
        <div className='text-2xl font-bold  '>{seconds || 0}</div>
        <div className=' uppercase text-xs'>Seconds</div>
      </div>
    </div>
  )
}

export default CountdownTimer
