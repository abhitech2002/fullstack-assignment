import React from 'react';
import logo from '../assets/logo.png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Abstract Logo" className="logo-image" />
                <span>Abstract | Help Center</span>
            </div>
            <button className="request-btn">Submit a request</button>
        </header>
    );
};

export default Header;
