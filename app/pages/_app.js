import '../styles/globals.css'
import Layout from './layout'
import { ChakraProvider} from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }) {
  // ADD SUPPORT TO CHAKRA UI
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}