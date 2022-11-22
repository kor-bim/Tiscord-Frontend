import { Box, Button, FormControl, FormHelperText, FormLabel, HStack, Input, VStack } from '@chakra-ui/react'
import Logo from '@/components/atoms/logo'
import ScaleFadeCard from '@/components/atoms/scaleFadeCard'
import CustomSelectBox from '@/components/atoms/customSelectBox'
import { useAppSelector } from '@/hooks/index'

const months = []
for (let i = 1; i <= 12; i++) {
  months.push({ value: i, name: i })
}
const gender = [
  { value: 'unknown', name: '선택안함' },
  { value: 'male', name: '남자' },
  { value: 'female', name: '여자' }
]

const RegisterForm = () => {
  const sign = useAppSelector((state) => state.sign)

  return (
    <ScaleFadeCard>
      <Box h={55} w={350} minW={24} mb={75}>
        <Logo type={'logoTitle'} />
      </Box>
      <VStack spacing={8} alignItems={'stretch'} justifyContent={'flex-start'} w={'100%'}>
        <HStack>
          <FormControl isRequired>
            <FormLabel fontWeight={500}>이름</FormLabel>
            <Input />
            <FormHelperText>이름을 입력해주세요</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={500}>성별</FormLabel>
            <CustomSelectBox options={gender} selected={'unknown'} />
            <FormHelperText>이름을 입력해주세요</FormHelperText>
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <FormLabel fontWeight={500}>비밀번호</FormLabel>
            <Input type={'password'} />
            <FormHelperText>비밀번호 8자리 이상 대소문자 구분</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={500}>비밀번호 확인</FormLabel>
            <Input type={'password'} />
            <FormHelperText>비밀번호 확인이 필요합니다</FormHelperText>
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <FormLabel fontWeight={500}>생년</FormLabel>
            <Input defaultValue={sign.birth.year} />
            <FormHelperText>태어난 년 4자리</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={500}>월</FormLabel>
            <CustomSelectBox options={months} selected={sign.birth.month}></CustomSelectBox>
            <FormHelperText>태어난 월</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={500}>일</FormLabel>
            <Input defaultValue={sign.birth.day} />
            <FormHelperText>태어난 일 2자리</FormHelperText>
          </FormControl>
        </HStack>
      </VStack>
      <VStack alignItems={'stretch'} w={'100%'} mt={8}>
        <Button colorScheme={'facebook'} size={'lg'}>
          가입하기
        </Button>
      </VStack>
    </ScaleFadeCard>
  )
}

export default RegisterForm
