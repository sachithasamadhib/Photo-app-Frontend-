import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Your Website. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="/aboutus">About Us</a>
                    <a href="/contactus">Contact</a>
                    <a href="/privacypolicy">Privacy Policy</a>
                    <a href="/termsofservice">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
