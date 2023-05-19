import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';

import Footer from '@/Components/Footer';
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
            <Footer />
        </>
    );
}

export default Layout;