import Link from 'next/link'
import {
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  HStack,
  VStack,
  IconButton,
  Button,
  Avatar,
  Text,
  useColorModeValue,
  Input,
  ButtonProps, useColorMode
  
} from '@chakra-ui/react'
import { BellIcon, MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';

const Nav = (props, ButtonProps) => {
	const { colorMode, toggleColorMode } = useColorMode();

	//DYNAMIC DATA, SAVE SESSION AND TOKEN OF USERS
	const dynamicData = {
		typeUser : 'Admin',
		FirstName : 'Jhon',
		LastName : 'Doe',
		username : 'MyUserName',
		tokeSession : '3ad81fdeeab2d1ca65d51597f3b1cfa4'
	}
	return (
	  <Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			borderBottomWidth="1px"
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
		>
		<Input maxW="500px" variant="outline" placeholder="Busca cualquier cosa..."/>
		<Button ml="5px" type="submit"><SearchIcon /></Button>
		<HStack spacing={{ base: '0', md: '6' }}>
		<Button
	        aria-label="Toggle Color Mode"
	        onClick={toggleColorMode}
	        _focus={{ boxShadow: 'none' }}
	        w="fit-content"
	        ml="5px"
	        {...props}>
	        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
	    </Button>
		  <Link href="/notifications">
			<IconButton
			  size="lg"
			  variant="ghost"
			  aria-label="open menu"
			  icon={<BellIcon />}
			/>
		  </Link>
		  <Flex alignItems={'center'}>
			<Menu>
				  <MenuButton
					py={2}
					transition="all 0.3s"
					_focus={{ boxShadow: 'none' }}>
					<HStack>
					  <Avatar
						size={'sm'}
						name={dynamicData['FirstName'] + ' ' + dynamicData['LastName']}
					  />
					  <VStack
						display={{ base: 'none', md: 'flex' }}
						alignItems="flex-start"
						spacing="1px"
						ml="2">
						<Text fontSize="sm">{dynamicData['FirstName'] + ' ' + dynamicData['LastName']}</Text>
						<Text fontSize="xs" color="gray.600">{dynamicData['typeUser']}</Text>
					  </VStack>
					</HStack>
				  </MenuButton>
				  <MenuList
					borderColor={useColorModeValue('gray.200', 'gray.700')}>
					<MenuItem><Link href={'/fursona/' + dynamicData['username']}>Mi perfil</Link></MenuItem>
					<MenuItem><Link href="/controls/settings">Configuración</Link></MenuItem>
					<MenuDivider />
					<MenuItem>Cerrar sesión</MenuItem>
				  </MenuList>
			</Menu>
		  </Flex>
		</HStack>
	  </Flex>
	);
  };
export default Nav;