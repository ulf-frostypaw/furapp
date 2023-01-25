import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>Correo verificado</Heading>
      <Text color={'gray.500'}>Tu correo electronico ha sido verificado exitosamente. Gracias por tomarte el tiempo de hace de este un mejor lugar. UwU</Text>
    </Box>
  );
}