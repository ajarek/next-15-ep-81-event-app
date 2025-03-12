import { ModeToggle } from './dark-mode'
import AppLogo from './AppLogo'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { House, Users } from 'lucide-react'

const Navbar = async () => {
  const session = await auth()
  return (
    <div className='fixed z-10 bg-transparent w-full h-16 flex  items-center justify-between flex-wrap px-8'>
      <AppLogo />
      <div className='flex gap-4 items-center flex-wrap justify-center  '>
        <Link
          href='/'
          className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200'
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {' '}
                <House
                  color='#ea580c'
                  size={32}
                  strokeWidth={1}
                  aria-label='Home'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <Link
          href='/about'
          className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200'
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {' '}
                <Users
                 color='#ea580c'
                  size={32}
                  strokeWidth={1}
                  aria-label='About us  '
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>About us</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      <Logout session={session} />
      <ModeToggle />
      </div>

    </div>
  )
}
export default Navbar
