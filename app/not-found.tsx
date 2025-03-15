'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='w-full min-h-[calc(100vh-32px)] flex flex-col items-center justify-start gap-4 p-2'>
      <Image
        src='/notfound.jpeg'
        alt='404'
        width={400}
        height={266}
        priority
      />
      <h1 className='text-center text-xl font-semibold'>
      The specified page could not be found.
      </h1>
      <p className='text-center'>
      The page you are looking for may have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className=''>
        <Button
          onClick={() => {
            router.push('/')
          }}
          aria-label='Go tony głównej'
          className='hover:bg-red-200'
        >
          Back to main page
        </Button>
      </div>
    </div>
  )
}
export default NotFoundPage
