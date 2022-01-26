import React from 'react';
import './footer.css';

const year = new Date().getFullYear();

function Footer() {
    return <div className='footer-container'>
        <div className='footer'>
            <p>Made by Suresh &copy; {year}</p>
        </div>
    </div>;
}

export default Footer;
