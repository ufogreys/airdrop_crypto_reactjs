import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <header className='sticky-top'>
            <Navbar></Navbar>
        </header>
    );
}
export default Header;