import React from 'react';
import './PrivacyPolicy.css';
import Header from './component/Header';
import Footer from './component/Footer';

const PrivacyPolicy = () => {
    return (
        <>
        <Header />
        <div className="fullscreen-privacy">
            <div className="privacy-container">
                <h1>Privacy Policy</h1>
                <p>Last updated: January 26, 2025</p>
                <section>
                    <h2>1. Introduction</h2>
                    <p>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website.</p>
                </section>
                <section>
                    <h2>2. Information We Collect</h2>
                    <p>We collect information that you provide to us directly, such as when you create an account or contact us for support. This may include your name, email address, and any other information you choose to provide.</p>
                </section>
                <section>
                    <h2>3. How We Use Your Information</h2>
                    <p>We use your information to provide, maintain, and improve our services. This includes using your information to create and manage your account, respond to your inquiries, and send you updates and promotional materials.</p>
                </section>
                <section>
                    <h2>4. Sharing Your Information</h2>
                    <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. We may share your information with service providers who perform services on our behalf.</p>
                </section>
                <section>
                    <h2>5. Data Security</h2>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security measures are perfect, and we cannot guarantee the security of your information.</p>
                </section>
                <section>
                    <h2>6. Your Rights</h2>
                    <p>You have the right to access, update, and delete your personal information. You can do this by contacting us at support@yoursite.com.</p>
                </section>
                <section>
                    <h2>7. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                </section>
                <p>If you have any questions about this Privacy Policy, please contact us at support@yoursite.com.</p>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default PrivacyPolicy;
