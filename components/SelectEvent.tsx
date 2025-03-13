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

const SelectEvent = ({ query }: SearchProps) => {
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
          <SelectTrigger className='w-[150px] bg-background'>
            <SelectValue placeholder='Event Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='music'>Music</SelectItem>
            <SelectItem value='art'>Art</SelectItem>
            <SelectItem value='food'>Food</SelectItem>
            <SelectItem value='sport'>Sport</SelectItem>
          </SelectContent>
        </Select>
  )
}

export default SelectEvent