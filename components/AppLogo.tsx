import Image from 'next/image'
import Link from 'next/link'

const AppLogo = () => {
  return (
    <div className='flex items-center justify-between  '>
      <Link
        href={'/'}
        className='flex gap-2 items-center'
      >
        <div className='relative   flex items-center justify-center'>
          <Image
            src={'/header/logo.svg'}
            alt='logo'
            width={60}
            height={60}
          />
        </div>
      </Link>
    </div>
  )
}
export default AppLogo
