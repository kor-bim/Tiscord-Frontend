import { Box, Button, FormControl, FormHelperText, FormLabel, Input, useToast, VStack } from '@chakra-ui/react'
import Logo from '@/components/atoms/logo'
import ScaleFadeCard from '@/components/atoms/scaleFadeCard'
import { useAppDispatch, useAppSelector } from '@/hooks/index'
import { insertEmail } from '@/redux/reducers/sign.slice'
import { useCallback } from 'react'

const LoginForm = ({ nextFormStep }) => {
  const { email } = useAppSelector((state) => state.sign)
  const dispatch = useAppDispatch()
  const toast = useToast()

  const handleEmail = useCallback(
    (e) => {
      dispatch(insertEmail(e.target.value))
    },
    [dispatch]
  )

  // TODO : 최상위 컴포넌트로 이동해야함..
  const isEmail = useCallback((email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    return emailRegex.test(email)
  }, [])

  const handleSubmit = useCallback(() => {
    if (isEmail(email)) {
      nextFormStep()
    } else {
      toast({
        position: 'top',
        title: '이메일을 입력해주세요',
        description: '아이디형식이 아닌 이메일형식으로 입력해주세요',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
  }, [isEmail, email, nextFormStep, toast])

  return (
    <ScaleFadeCard>
      <Box h={55} w={350} minW={24} mb={75}>
        <Logo type={'logoTitle'} />
      </Box>
      <VStack spacing={14} alignItems={'stretch'} direction={'column'} justifyContent={'flex-start'} w={'100%'}>
        <Box>
          <FormControl>
            <FormLabel fontSize={'2xl'}>이메일 주소</FormLabel>
            <Input type={'email'} h={'50px'} value={email} onChange={handleEmail} />
            <FormHelperText>로그인을 위한 이메일을 입력해주세요</FormHelperText>
          </FormControl>
        </Box>
      </VStack>
      <VStack alignItems={'stretch'} w={'100%'} mt={8}>
        <Button colorScheme={'facebook'} size={'lg'} onClick={handleSubmit} type={'submit'}>
          확인
        </Button>
      </VStack>
    </ScaleFadeCard>
  )
}

export default LoginForm
