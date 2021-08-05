import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <div className="Navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
        </div>
    );
}

export default Navbar;