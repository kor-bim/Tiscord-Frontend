import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import ServerList from '@/components/organisms/serverList'
const Server = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid h="100vh" templateRows="1fr" templateColumns="72px 1fr">
      <GridItem bg={'#202225'}>
        <ServerList />
      </GridItem>
      <GridItem>{children}</GridItem>
    </Grid>
  )
}

export default Server
