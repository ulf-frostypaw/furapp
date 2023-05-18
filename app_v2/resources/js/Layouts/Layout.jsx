import { Link } from '@inertiajs/react';
//import {AiFillHeart} from 'react-icons/ai'
import { Head } from '@inertiajs/react';

//import HeaderLogged from './HeaderLogged';
import Header from '@/Components/Header';
const Layout = ({children, titlePage, LayoutClass}) =>{
    return(
        <>
            <Head title={titlePage} />
            <Header />
            <main className={LayoutClass}>
                {children}
            </main>
            <div className="nav-mobile">
                lorem link
            </div>
            <footer>
                <span>Realizado con {/*<AiFillHeart color='red' />*/} por <Link href="https://github.com/Purrgrammers-Studio" className='text-underline' rel="_blank">Purrgrammers Studio's</Link></span>
            </footer>
        </>
    );
}

export default Layout;