'use client'

import React from 'react'
import { useCartStore } from '@/store/cartStore'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Cart = () => {
  const { items, total, removeItemFromCart } = useCartStore()
  const router = useRouter()

  return (
    <div className='min-h-[calc(100vh-4rem)] pt-16 px-8 max-sm:px-4'>
      {items.length > 0 ? (
        <Table>
          <TableCaption className='w-full text-right text-2xl font-bold space-y-4 '>
            <div>Total: ${total().toFixed(2)}</div>
            <Button
              onClick={() => router.push('/payment')}
              className='text-xl'
            >
              I order and pay
            </Button>
          </TableCaption>
          <TableHeader>
            <TableRow className=' border-b border-primary'>
              <TableHead>Date & Time</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className='max-sm:hidden'>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className='text-center max-sm:hidden'>
                Tickets
              </TableHead>
              <TableHead className='max-sm:hidden'>Price</TableHead>
              <TableHead>Total to pay</TableHead>
              <TableHead className='text-center'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.date}/{item.hour}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell className='max-sm:hidden'>{item.type}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell className='text-center max-sm:hidden'>
                  {item.quantity}
                </TableCell>
                <TableCell className='max-sm:hidden'>
                  ${(+item.price).toFixed(2)}
                </TableCell>
                <TableCell>
                  ${(+item.price * +item.quantity).toFixed(2)}
                </TableCell>
                <TableCell className='text-center'>
                  <button onClick={() => removeItemFromCart(item.id)}>
                    ❌
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className='text-center text-2xl text-red-500'>Your cart is empty!</p>
      )}
    </div>
  )
}

export default Cart
