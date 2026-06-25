import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';

const PrivacyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Helmet>
                <title>Privacy Policy | QubitKode</title>
                <meta name="description" content="QubitKode's Privacy Policy — Learn how we collect, protect, and use your personal information and project data in compliance with global standards." />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="https://qubitkode.com/privacy" />
            </Helmet>

            <div className="legal-header">
                <div className="legal-container">
                    <span className="section-tag">Legal Info</span>
                    <h1 className="legal-title">Privacy Policy</h1>
                    <p className="legal-subtitle">Effective Date: October 2023</p>
                </div>
            </div>

            <div className="legal-body">
                <div className="legal-container legal-content">
                    <h2>1. Introduction</h2>
                    <p>Welcome to QubitKode. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By engaging with our agency, you agree to the collection and use of information in accordance with this policy.</p>

                    <h2>2. Information We Collect</h2>
                    <p>We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us.</p>
                    <ul>
                        <li><strong>Personal Data:</strong> Name, email address, phone number, company name.</li>
                        <li><strong>Project Data:</strong> Information shared during project scoping and consultation.</li>
                        <li><strong>Usage Data:</strong> We may automatically collect certain information when you visit our website, such as IP address, browser type, and usage patterns.</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use the information we collect or receive:</p>
                    <ul>
                        <li>To facilitate the delivery of services to the user.</li>
                        <li>To respond to user inquiries and offer support.</li>
                        <li>To send administrative information to you.</li>
                        <li>To fulfill and manage contractual obligations.</li>
                        <li>To protect our Services from security threats.</li>
                    </ul>

                    <h2>4. How We Share Your Information</h2>
                    <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We strictly ensure that client data and proprietary project details remain confidential and under NDAs where applicable.</p>

                    <h2>5. Data Security</h2>
                    <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>

                    <h2>6. Contact Us</h2>
                    <p>If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@qubitkode.com">privacy@qubitkode.com</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
