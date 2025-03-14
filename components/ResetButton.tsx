'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const ResetButton = () => {
  const router = useRouter()

  const handleReset = () => {
    router.push('/')
  }

  return (
    <Button
      size={'icon'}
      className='bg-transparent hover:bg-transparent'
      onClick={handleReset}
    >
      ❌
    </Button>
  )
}

export default ResetButton
