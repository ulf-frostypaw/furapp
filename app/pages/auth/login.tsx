import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,Center, 
    useColorModeValue,
  } from '@chakra-ui/react';
  import Footer from '../../layouts/footer'
  import { FcGoogle } from 'react-icons/fc';
  import { AiFillGithub } from 'react-icons/ai'
  

  export default function SimpleCard() {
    return (
      <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Inicia sesión en tu cuenta</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>y disfruta de todas nuestras <Link color={'blue.400'}>nuevas caracteristicas</Link>. ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Correo o nombre de usuario</FormLabel>
                <Input placeholder="fursonaje@fursonas.net" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link href="/auth/recovery" color={'blue.400'}>Restablecer contraseña</Link>
                  <Link href="/auth/register" color={'green.400'}>Crear cuenta</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>Iniciar sesión
                </Button>
              </Stack>
            </Stack>

          <Box mt={'5px'}>
            <Text align={'center'} color={'gray.300'}>También, entra con tus apps favoritas</Text>
              {/* Google */}
              <Button mb={'3px'} mt={'5px'} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Iniciar sesión con Google</Text>
                </Center>
              </Button>

              {/* GitHub */}
              <Button mt={'3px'} w={'full'} variant={'outline'} leftIcon={<AiFillGithub />}>
                <Center>
                  <Text>Iniciar sesión con GitHub</Text>
                </Center>
              </Button>
            </Box>

          </Box>
        </Stack>
      </Flex>
      <Footer />
      </>
    );
  }
