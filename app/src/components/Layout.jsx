import React from 'react';
import {Helmet} from "react-helmet";

import HeaderLogged from './HeaderLogged';
const Layout = ({children, titlePage}) =>{
    return(
        <>
            <Helmet>
                <title>{titlePage} / FurrApp</title>
            </Helmet>
            
            <HeaderLogged />
            <div className='container grid'>{children}</div>
        </>
    ); 
}

export default Layout;