import type { AppProps } from 'next/app'
import wrapper from '@/redux/store'
import { ChakraProvider } from '@chakra-ui/provider'
import { chakraTheme } from '@/constants/chakra.theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider resetCSS theme={chakraTheme}>
        <Head>
          <title>TRAVEL CORD</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp)

