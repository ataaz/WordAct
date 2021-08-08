import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <div className="Navbar">
            <ul id="menu-primary" className="navbar-nav">
                <li id="menu-item-01" className=""><Link to="/services">Services</Link></li>
                <li id="menu-item-02" className=""><Link to="/about">Locations</Link></li>
                <li id="menu-item-03" className=""><Link to="/blogs">Virtual Tour</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;