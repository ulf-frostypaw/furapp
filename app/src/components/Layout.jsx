import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'

//import HeaderLogged from './HeaderLogged';
import Header from './Header';
const Layout = ({children, titlePage, LayoutClass}) =>{
    const [username, setUsername] = useState();
    useEffect(() => {
        // REDIRECT TO LOGIN IF DONT LOGGED
    }, [])
    return(
        <>
            <Helmet>
                <title>{titlePage} / FurrApp</title>
            </Helmet>
            <Header />
            <main className={LayoutClass}>
                {children}
            </main>
            <div className="nav-mobile">
                lorem link
            </div>
            <footer>
                <span>Realizado con <AiFillHeart color='red' /> por <Link to="https://github.com/Purrgrammers-Studio" className='text-underline' rel="_blank">Purrgrammers Studio's</Link></span>
            </footer>
        </>
    );
}

export default Layout;