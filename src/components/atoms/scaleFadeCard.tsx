import React from 'react'
import { Flex, ScaleFade } from '@chakra-ui/react'

const ScaleFadeCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScaleFade initialScale={1.5} in={true}>
      <Flex
        direction={'column'}
        justifyContent={'center'}
        alignItems={'baseline'}
        h={'100vh'}
        w={450}
        pb={20}
        minW={450}
      >
        {children}
      </Flex>
    </ScaleFade>
  )
}

export default ScaleFadeCard
