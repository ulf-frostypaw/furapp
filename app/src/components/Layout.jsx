import React from 'react';
import {Helmet} from "react-helmet";

//import HeaderLogged from './HeaderLogged';
import Header from './Header';
const Layout = ({children, titlePage, LayoutClass}) =>{
    return(
        <>
            <Helmet>
                <title>{titlePage} / FurrApp</title>
            </Helmet>
            
            <Header />
            <div className={'container grid ' + LayoutClass}>{children}</div>
        </>
    ); 
}

export default Layout;