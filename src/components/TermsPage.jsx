import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';

const TermsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Helmet>
                <title>Terms of Service | QubitKode</title>
                <meta name="description" content="QubitKode's Terms of Service — the legal agreement governing your use of our website and engagement with our web, mobile, AI, and game development services." />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="https://qubitkode.com/terms" />
            </Helmet>

            <div className="legal-header">
                <div className="legal-container">
                    <span className="section-tag">Legal Info</span>
                    <h1 className="legal-title">Terms of Service</h1>
                    <p className="legal-subtitle">Effective Date: October 2023</p>
                </div>
            </div>

            <div className="legal-body">
                <div className="legal-container legal-content">
                    <h2>1. Standard of Agreement</h2>
                    <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and QubitKode (“we,” “us” or “our”), concerning your access to and use of our website as well as any related services or applications.</p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein are owned or controlled by us.</p>
                    <p>For client projects, intellectual property rights and code ownership are expressly defined within dedicated project contracts and Mutual NDAs.</p>

                    <h2>3. User Representations</h2>
                    <p>By using the website or engaging our services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means; and (4) your use of the Site will not violate any applicable law or regulation.</p>

                    <h2>4. Services and Deliverables</h2>
                    <p>QubitKode provides digital engineering, consulting, and development services. Specific deliverables, timelines, and costs are negotiated and bound by individual Master Service Agreements (MSAs) or Statements of Work (SoWs) executed directly with the client.</p>

                    <h2>5. Limitation of Liability</h2>
                    <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site or our general services, except where explicitly defined in a dedicated project contract.</p>

                    <h2>6. Contact Us</h2>
                    <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <a href="mailto:legal@qubitkode.com">legal@qubitkode.com</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
