import React from 'react';
import {Helmet} from "react-helmet";

import HeaderLogged from './HeaderLogged';
const Layout = ({children, titlePage}) =>{
    return(
        <div>
            <Helmet>
                <title>{titlePage} / FurrApp</title>
            </Helmet>
            
            <HeaderLogged />
            {children}
        </div>
    ); 
}

export default Layout;