import React from 'react';
import './TermsOfService.css';
import Header from './component/Header';
import Footer from './component/Footer';

const TermsOfService = () => {
    return (
        <>
        <Header />
        <div className="fullscreen-terms">
            <div className="terms-container">
                <h1>Terms of Service</h1>
                <p>Last updated: January 26, 2025</p>
                <section>
                    <h2>1. Introduction</h2>
                    <p>Welcome to our website. By accessing or using our site, you agree to abide by these terms and conditions. Please read them carefully.</p>
                </section>
                <section>
                    <h2>2. Use of the Site</h2>
                    <p>You agree to use the site in a manner that complies with all applicable laws and regulations. You shall not use the site for any unlawful purposes.</p>
                </section>
                <section>
                    <h2>3. Intellectual Property</h2>
                    <p>All content on this site, including text, graphics, logos, and images, is the property of our website and protected by copyright laws. You may not reproduce, distribute, or create derivative works from any of the content without our prior written consent.</p>
                </section>
                <section>
                    <h2>4. User Content</h2>
                    <p>You may submit content to the site. By doing so, you grant us a non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content. You represent that you have the necessary rights to grant this license.</p>
                </section>
                <section>
                    <h2>5. Limitation of Liability</h2>
                    <p>We are not liable for any damages arising from your use of the site. This includes direct, indirect, incidental, and consequential damages.</p>
                </section>
                <section>
                    <h2>6. Changes to Terms</h2>
                    <p>We reserve the right to update these terms at any time. Changes will be effective immediately upon posting on the site. It is your responsibility to review the terms regularly.</p>
                </section>
                <section>
                    <h2>7. Governing Law</h2>
                    <p>These terms are governed by the laws of the applicable jurisdiction. Any disputes arising from these terms shall be resolved in the courts of that jurisdiction.</p>
                </section>
                <p>If you have any questions about these Terms of Service, please contact us at support@yoursite.com.</p>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default TermsOfService;
