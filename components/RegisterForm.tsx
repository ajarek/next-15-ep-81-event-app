'use client'

import React, { useState } from 'react'
import { UserWithoutId } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImage] = useState('')
  const [isAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: UserWithoutId = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='px-4  flex flex-col items-center rounded-lg border-2 shadow-xl gap-4 min-w-[300px]'>
      <div className='flex justify-center p-2'>
        <Link
          href='/'
          aria-label='Logo'
        >
          <Image
            src={'/images/user.png'}
            alt='logo'
            width={60}
            height={60}
            className='w-full h-full object-cover  '
          />
        </Link>
      </div>
      <form
        className='w-80  flex flex-col gap-4 p-6  '
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          placeholder='Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className=''
        />
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=''
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=''
        />
        <Input
          type='text'
          placeholder='Your photo (optional)'
          value={img}
          onChange={(e) => setImage(e.target.value)}
          className=''
        />
        <Input
          type='hidden'
          name='isAdmin'
          value={`${DEFAULT_IS_ADMIN}`}
        />
        <Button
          className='w-full bg-[#0E78F9] text-white hover:bg-[#0E78F9]/90'
          type='submit'
          aria-label='Sign up'
        >
          Register
        </Button>
        <Link
          href='/login'
          className=''
          aria-label='Already have an account? Log in'
        >
          Already have an account? <b className='text-[#0E78F9]'>Log in</b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
