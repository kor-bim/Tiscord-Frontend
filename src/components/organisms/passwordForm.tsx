import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link as ChLink,
  useColorModeValue,
  useToast,
  VStack
} from '@chakra-ui/react'
import Logo from '@/components/atoms/logo'
import ScaleFadeCard from '@/components/atoms/scaleFadeCard'
import { EmailIcon } from '@chakra-ui/icons'

const PasswordForm = ({ resetFormStep }) => {
  const toast = useToast()

  const sendEmail = () => {
    toast({
      position: 'top',
      title: '지시사항 이메일로 전송',
      description:
        '계정 비밀번호 변경 방법을 dbsgksqlschl@naver.com(으)로 보냈어요. 받은 편지함 또는 스팸함을 확인해 주세요.',
      status: 'success',
      duration: 9000,
      icon: <EmailIcon mt={1} />,
      isClosable: true
    })
  }

  return (
    <ScaleFadeCard>
      <Box h={55} w={350} minW={24} mb={75}>
        <Logo type={'logoTitle'} />
      </Box>
      <VStack spacing={5} alignItems={'stretch'} direction={'column'} justifyContent={'flex-start'} w={'100%'}>
        <Box>
          <FormControl>
            <FormLabel fontSize={'2xl'}>비밀번호</FormLabel>
            <Input type={'password'} h={'50px'} />
          </FormControl>
        </Box>
      </VStack>
      <VStack w={'full'} spacing={10} mt={8}>
        <Button colorScheme={'messenger'} w={'full'} size={'lg'}>
          로그인
        </Button>
        <ChLink onClick={sendEmail}>비밀번호를 잊으셨나요?</ChLink>
        <Box textAlign={'left'} w={'full'}>
          <ChLink onClick={resetFormStep} color={useColorModeValue('gray.600', 'whiteAlpha.600')} fontSize={'sm'}>
            뒤로가기
          </ChLink>
        </Box>
      </VStack>
    </ScaleFadeCard>
  )
}

export default PasswordForm
