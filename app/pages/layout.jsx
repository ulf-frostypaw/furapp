//import Nav from '../components/Nav'
//import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

import NextProgress from "next-progress";

import Link from 'next/link';
/*import {
  Box,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
} from '@chakra-ui/react';*/
//import { RepeatClockIcon } from '@chakra-ui/icons'

export default function Layout({children}){
	
  
	return(
		<div className={styles.continer}>
		<NextProgress delay={300}/>
			{children}
		</div>
	)
}