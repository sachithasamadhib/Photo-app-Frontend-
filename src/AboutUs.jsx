import React from 'react';
import './AboutUs.css';
import Header from './component/Header';
import Footer from './component/Footer';

const AboutUs = () => {
    return (
        <>
        <Header/>
        <div className="about-us-container">
            <div className="about-section">
                <h1>About Us</h1>
                <p>Welcome to our website! We are dedicated to providing you with the best images, videos, and music for your creative projects. Our mission is to inspire and empower you to create amazing content.</p>
                <img src="https://th.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain/800x400" alt="Our Team" className="about-image" />
                <section>
                    <h2>Our Story</h2>
                    <p>We started with a simple idea: to make high-quality content accessible to everyone. Our team is passionate about creativity and innovation, and we work tirelessly to bring you the best resources.</p>
                    <img src="https://th.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain/400x400" alt="Our Office" className="about-image" />
                </section>
                <section>
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Quality:</strong> We strive to provide the highest quality content.</li>
                        <li><strong>Accessibility:</strong> Our resources are available to everyone.</li>
                        <li><strong>Creativity:</strong> We encourage and support creative expression.</li>
                        <li><strong>Community:</strong> We believe in building a supportive and inclusive community.</li>
                    </ul>
                </section>
                <section>
                    <h2>Meet the Team</h2>
                    <p>Our team consists of talented individuals with a diverse range of skills and backgrounds. We are united by our passion for creativity and our commitment to delivering the best content.</p>
                    <img src="https://th.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain/400x400" alt="Team Collaboration" className="about-image" />
                </section>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AboutUs;
