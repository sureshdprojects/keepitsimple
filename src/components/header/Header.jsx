import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const linkStyle = {
    textDecoration: "none",
    color: "#fff"
}


function Header() {

    return <div className='header-container'>
        <div className='header'>
            <div className='logo'>
                <span>KeepitSimple</span>
            </div>
            <div className='links'>
                <Link style={linkStyle} to="/">Home</Link>
                <Link style={linkStyle} to='about'>About Us</Link>
                <Link style={linkStyle} to='/writeforus'>Write for Us</Link>
            </div>
        </div>
    </div>;
}

export default Header;
