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
interface SearchProps {
  query: string
}
const SelectLocation = ({ query }: SearchProps) => {

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
    <Select onValueChange={(value) => handleSearch(value)}
    defaultValue={searchParams.get(query)?.toString()}>
    <SelectTrigger id='location' className='w-[180px]  bg-background'>
      <SelectValue placeholder='Event location'  />
    </SelectTrigger>
    <SelectContent >
      <SelectItem value='Square Garden, New York'>
        Square Garden, New York
      </SelectItem>
      <SelectItem value='Blue Note, New York'>
        Blue Note, New York
      </SelectItem>
      <SelectItem value='Art District, Berlin'>
        Art District, Berlin
      </SelectItem>
      <SelectItem value='Louvre Museum, Paris'>
        Louvre Museum, Paris
      </SelectItem>
      <SelectItem value='Art Museum, New York'>
        Art Museum, New York
      </SelectItem>
      <SelectItem value='Central Park, New York'>
        Central Park, New York
      </SelectItem>
      <SelectItem value='Culinary School, Los Angeles'>
        Culinary School, Los Angeles
      </SelectItem>
      <SelectItem value='Cricket Ground, London'>
        Cricket Ground, London
      </SelectItem>
      <SelectItem value='Staples Center, Los Angeles'>
        Staples Center, Los Angeles
      </SelectItem>
      <SelectItem value='Concert Hall, Vienna'>
        Concert Hall, Vienna
      </SelectItem>
      <SelectItem value='Park Plaza, Miami'>Park Plaza, Miami</SelectItem>
      <SelectItem value='Wembley Stadium, London'>
        Wembley Stadium, London
      </SelectItem>
      <SelectItem value='Art Institute, Chicago'>
        Art Institute, Chicago
      </SelectItem>
      <SelectItem value='Scala, Milan'>Scala, Milan</SelectItem>
      <SelectItem value='Sushi School, Tokyo'>
        Sushi School, Tokyo
      </SelectItem>
      <SelectItem value='Roland Garros, Paris'>
        Roland Garros, Paris
      </SelectItem>
      <SelectItem value='National Gallery, London'>
        National Gallery, London
      </SelectItem>
      <SelectItem value='The Forum, Los Angeles'>
        The Forum, Los Angeles
      </SelectItem>
      <SelectItem value='Green Park, Los Angeles'>
        Green Park, Los Angeles
      </SelectItem>
    </SelectContent>
  </Select>
  )
}

export default SelectLocation
