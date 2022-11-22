import Image from 'next/image'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = ({ type }) => {
  const loginSrc = useColorModeValue('/logo-frame1.png', '/logo-frame2.png')
  if (type === 'logoTitle') {
    return (
      <Link href={'/login'}>
        <Image src={loginSrc} alt={'logo'} width={512} height={128} />
      </Link>
    )
  } else {
    return (
      <Link href={'/login'}>
        <Image src={'/login'} alt={'logo'} width={128} height={128} />
      </Link>
    )
  }
}

export default Logo
