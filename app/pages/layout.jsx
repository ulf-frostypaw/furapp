import Nav from '../components/Nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

import NextProgress from "next-progress";

import Link from 'next/link';
import {
  Box,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
} from '@chakra-ui/react';
import { RepeatClockIcon } from '@chakra-ui/icons'

export default function Layout({children}){
	
const SidebarContent = () => {
	return (
	  <Box
		transition="1s ease"
		borderRight="1px"
		borderRightColor={useColorModeValue('gray.200', 'gray.700')}
		w={{ base: 'full', md: 60 }}
		pos="fixed"
		h="full">
		<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
		  <Text
		  		fontSize="2xl"
		  		fontFamily="monospace"
		  		fontWeight="extrabold"
		  		bgGradient='linear(to-l, #9932cc, #ff8c00)'
				bgClip='text'
		  >
			<Link href="/">Fursonas</Link>
		  </Text>
		</Flex>
		<Link href="/users" style={{ textDecoration: 'none' }}>
			<Flex
			  align="center"
			  p="4"
			  mx="4"
			  borderRadius="lg"
			  role="group"
			  cursor="pointer"
			  _hover={{
				bg: 'cyan.400',
				color: 'white',
			  }}
			  >
				Usuarios
			</Flex>
		</Link>
		<Link href="/extra/updateLog" style={{ textDecoration: 'none' }}>
			<Flex
			  align="center"
			  p="4"
			  mx="4"
			  borderRadius="lg"
			  role="group"
			  cursor="pointer"
			  _hover={{
				bg: 'cyan.400',
				color: 'white'
			  }}
			  variant='link'
			  ><RepeatClockIcon mr="7px" />Actualizaciones</Flex>
		</Link>
	  </Box>
	);
  };
  
	return(
		<div className={styles.continer}>
		<NextProgress delay={300}/>
		<Box >
			<SidebarContent />
			<Nav />
			<Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box>
			<Footer />
		</Box>
		</div>
	)
}