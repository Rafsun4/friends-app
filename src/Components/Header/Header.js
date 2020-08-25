import React from 'react';
import './Header.css';
import logo from './friends-logo.png'

const Header = () => {
    return (
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;