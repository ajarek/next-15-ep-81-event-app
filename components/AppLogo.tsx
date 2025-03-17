import Image from 'next/image'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const AppLogo = () => {
  return (
    <div className='flex items-center justify-between  '>
      <Link
        href='/'
        className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center '
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {' '}
              <div className='relative   flex items-center justify-center'>
                <Image
                  src={'/header/logo.svg'}
                  alt='logo'
                  width={60}
                  height={60}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  )
}
export default AppLogo
