import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2> welcome to tshirt maina</h2>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/order'>Order review</Link>
            </nav>
        </div>
    );
};

export default Header;