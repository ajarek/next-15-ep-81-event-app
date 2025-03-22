'use client'

import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Armchair } from 'lucide-react'

interface SearchProps {
  query: string
  array: { seat: string; price: number }[]
}

const SelectSeats = ({ query, array }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`${pathname}?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }

  return (
    <Select
      onValueChange={(value) => handleSearch(value)}
      defaultValue={searchParams.get(query)?.toString()}
    >
      <SelectTrigger
        id={'event'}
        className='w-[300px] bg-background border border-primary py-6 text-lg'
      >
        <SelectValue placeholder='Select Seat' />
      </SelectTrigger>
      <SelectContent>
        {array.map((item, index) => (
          <SelectItem
            key={index}
            value={`${item.price.toString()} ${item.seat}`}
          >
            <div className=' flex  items-center gap-24'>
              <span className='capitalize flex items-center gap-2 '>
                <Armchair color={'#ea580c'} /> {item.seat}
              </span>
              <span>$ {item.price}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectSeats
