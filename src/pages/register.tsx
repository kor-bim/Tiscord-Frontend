import { Flex } from '@chakra-ui/react'
import RegisterForm from '@/components/organisms/registerForm'

const Register = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} h={'100vh'}>
      <RegisterForm />
    </Flex>
  )
}

export default Register
