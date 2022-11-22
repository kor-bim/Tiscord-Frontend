import ScaleFadeCard from '@/components/atoms/scaleFadeCard'
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import Logo from '@/components/atoms/logo'

const ResetForm = () => {
  return (
    <ScaleFadeCard>
      <Box h={55} w={350} minW={24} mb={75}>
        <Logo type={'logoTitle'} />
      </Box>
      <VStack spacing={5} alignItems={'stretch'} direction={'column'} justifyContent={'flex-start'} w={'100%'}>
        <Box>
          <FormControl>
            <FormLabel fontSize={'2xl'}>새 비밀번호</FormLabel>
            <Input type={'password'} h={'50px'} />
          </FormControl>
        </Box>
      </VStack>
      <VStack w={'full'} mt={8}>
        <Button colorScheme={'messenger'} w={'full'} size={'lg'}>
          비밀번호 변경하기
        </Button>
      </VStack>
    </ScaleFadeCard>
  )
}
export default ResetForm
