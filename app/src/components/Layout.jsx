import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";

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
        </>
    ); 
}

export default Layout;