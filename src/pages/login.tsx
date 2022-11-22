import LoginForm from '@/components/organisms/loginForm'
import PasswordForm from '@/components/organisms/passwordForm'
import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

const Login = () => {
  const [formStep, setFormStep] = useState(0)

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)
  const resetFormStep = () => setFormStep(0)

  return (
    <Flex alignItems={'center'} justifyContent={'center'} h={'100vh'}>
      {formStep === 0 && <LoginForm nextFormStep={nextFormStep} />}
      {formStep === 1 && <PasswordForm resetFormStep={resetFormStep} />}
    </Flex>
  )
}

export default Login
