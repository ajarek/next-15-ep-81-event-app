import React from 'react'
import { redirect } from 'next/navigation'
const Reset = () => {
  const reset = false

  if (!reset) {
    redirect('/')
  }
  return <div>Loading...</div>
}

export default Reset
