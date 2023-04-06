import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className='nav-main'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/review">Order Review</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default Header;