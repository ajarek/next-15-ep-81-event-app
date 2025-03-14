'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react';

const ResetButton = () => {
  const router = useRouter()
  const searchParams = useSearchParams();

  const handleReset = () => {
    const params = new URLSearchParams(searchParams);
    for (const key of Array.from(params.keys())) {
      params.delete(key);
    }

    
    const inputElements = document.querySelectorAll('input[type="text"]');
    inputElements.forEach((input) => {
      (input as HTMLInputElement).value = '';
    });
    // const selectElement = document.querySelector('#event');
    // if (selectElement)
    // {  selectElement.textContent = ''}
    
    // const selectLocation = document.querySelector('#location');
    // if (selectLocation)
    // {  selectLocation.textContent = ''}
    

    
    router.push(`/?${params.toString()}`);
  };

  return (
    <Button
      size={'icon'}
      className='bg-transparent hover:bg-transparent'
      onClick={handleReset}
    >
      <X className="h-4 w-4 text-red-500" />
    </Button>
  )
}

export default ResetButton
