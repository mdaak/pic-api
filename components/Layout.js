import React from 'react';
import NavBar from './Global/NavBar/NavBar';

const Layout = ({children}) => {
    return (
        <>
        <NavBar/>
        {children}  
        </>
    );
};

export default Layout;