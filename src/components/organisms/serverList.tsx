import { Flex, VStack, Text, Wrap, WrapItem, Avatar } from '@chakra-ui/react'

const ServerList = () => {
  return (
    <Wrap display={'flex'} h={'100vh'}>
      <WrapItem>
        <Avatar name={'Home'} />
      </WrapItem>
    </Wrap>
  )
}

export default ServerList
