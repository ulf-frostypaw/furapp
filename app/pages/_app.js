import '../styles/globals.css'
//import '../styles/style.css'
import NextProgress from "next-progress";

import Cookies from '../components/cookies'

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
        {/*<Cookies />*/}
        
    </ChakraProvider>
  )
}

export default MyApp