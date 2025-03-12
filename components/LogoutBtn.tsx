import { LogOut } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const LogoutBtn = () => {
  return (
    <Link
      href='/signout'
      className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200   '
      aria-label='Wyloguj'
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {' '}
            <LogOut
             color='#ea580c'
              size={32}
              strokeWidth={1}
              aria-label='Log out'
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Log out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}

export default LogoutBtn
