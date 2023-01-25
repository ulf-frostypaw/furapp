import { RepeatClockIcon } from '@chakra-ui/icons'
import { Heading, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo';
export default function updateLog(){
	return(
		<>
			<NextSeo
		      title="Actualizaciones | fursonas [dot] net"
		      description="Then with a short description here."
		    />
			<Heading size='lg'><RepeatClockIcon mr="10px" />Historial de actualizaciones.</Heading>
			<Text fontSize='md'>Una gran cantidad de cambios han transcurrido durante esta ultima actualizacion. Tomate un rato y mira todos los cambio que han habido en esta nueva versión. :3</Text>
		</>
	);
}