import React from 'react';
import Navbar from './Navbar';


function Header() {
    return(
        <header className="Header">
            <div className="container">
                <h1>Header</h1>
                <Navbar/>
            </div>
        </header>
    );
}

export default Header;