import { Link } from '@inertiajs/react'
import {AiFillHeart} from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <span>Realizado con <AiFillHeart color='red' /> por <Link href="https://github.com/Purrgrammers-Studio" className='text-underline' rel="_blank">Purrgrammers Studio's</Link></span>
        </footer>
    )
}
export default Footer