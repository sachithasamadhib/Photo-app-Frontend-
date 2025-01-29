import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/dashboard">
                    <img src="https://th.bing.com/th/id/R.cc7a18652f00f3aeafe78574608c54ef?rik=REhX7Jotzj%2fIHA&pid=ImgRaw&r=0/150x50" alt="Website Logo" />
                </Link>
            </div>
            <nav className="nav-links">
                <Link to="/login">Login</Link>
                <Link to="/profile">User Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
