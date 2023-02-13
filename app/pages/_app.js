import '../styles/globals.css'
//import '../styles/style.css'
import NextProgress from "next-progress";

//import Layout from './layout'
//import { ChakraProvider} from '@chakra-ui/react'
/*

 // ADD SUPPORT TO CHAKRA UI
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )

  ]*/

/*export default function MyApp({ Component, pageProps }) {
  // ADD SUPPORT TO CHAKRA UI
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}*/

import { ChakraProvider, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription } from '@chakra-ui/react'
import { Offline, Online } from "react-detect-offline";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <NextProgress delay={300}/>
       

        <Offline>
          <Alert status='warning'>
            <AlertIcon />
            <AlertTitle>Sin conexión a internet</AlertTitle>
            <AlertDescription>Puede que no todas las caracteristicas estén diponibles.</AlertDescription>
          </Alert>
        </Offline>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp