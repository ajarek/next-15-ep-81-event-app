'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from './ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
interface SearchProps {
  query: string
}

const SelectTime = ({ query }: SearchProps) => {
  
  const [date, setDate] = React.useState<Date | undefined>(new Date())
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
      }finally{
        setDate(new Date())
      }
    }

 
  return (
    <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[180px] justify-start text-left font-normal ',
                !date && 'text-muted-foreground border border-primary '
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {date ? format(date, 'dd MM yyyy') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={(value) =>{ handleSearch(value? value.toLocaleString('sv-SV').slice(0,10) :''  ); setDate(value)}}
              initialFocus
            />
          </PopoverContent>
        </Popover>
  )
}

export default SelectTime