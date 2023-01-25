import ProfileCard from '../components/profileCard'
import {Flex} from '@chakra-ui/react'
export default function user(){
	return(
		<>
			<Flex ml="5px" mr="5px" justifyContent="center">
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				
			</Flex>
		</>
	);
}