'use client'

import React from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button'
 
 

const Search = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div>
      <form action="" className='flex items-center gap-4 border border-primary py-2 px-4 rounded-xl'>
        <Input type="text" name='name' placeholder="Event name or artist" />
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Event location" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Square Garden, New York">Square Garden, New York</SelectItem>
    <SelectItem value="Blue Note, New York">Blue Note, New York</SelectItem>
    <SelectItem value="Art District, Berlin">Art District, Berlin</SelectItem>
    <SelectItem value="Louvre Museum, Paris">Louvre Museum, Paris</SelectItem>
    <SelectItem value="Art Museum, New York">Art Museum, New York</SelectItem>
    <SelectItem value="Central Park, New York">Central Park, New York</SelectItem>
    <SelectItem value="Culinary School, Los Angeles">Culinary School, Los Angeles</SelectItem>
    <SelectItem value="Cricket Ground, London">Cricket Ground, London</SelectItem>
    <SelectItem value="Staples Center, Los Angeles">Staples Center, Los Angeles</SelectItem>
    <SelectItem value="Concert Hall, Vienna">Concert Hall, Vienna</SelectItem>
    <SelectItem value="Park Plaza, Miami">Park Plaza, Miami</SelectItem>
    <SelectItem value="Wembley Stadium, London">Wembley Stadium, London</SelectItem>
    <SelectItem value="Art Institute, Chicago">Art Institute, Chicago</SelectItem>
    <SelectItem value="Scala, Milan">Scala, Milan</SelectItem>
    <SelectItem value="Sushi School, Tokyo">Sushi School, Tokyo</SelectItem>
    <SelectItem value="Roland Garros, Paris">Roland Garros, Paris</SelectItem>
    <SelectItem value="National Gallery, London">National Gallery, London</SelectItem>
    <SelectItem value="The Forum, Los Angeles">The Forum, Los Angeles</SelectItem>
    <SelectItem value="Green Park, Los Angeles">Green Park, Los Angeles</SelectItem>
    
  </SelectContent>
</Select>
<Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground border border-primary"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Event Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="music">music</SelectItem>
    <SelectItem value="art">art</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
      </form>
    </div>
  )
}

export default Search