import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';

const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify2 header-transparent'
                offCanvas='enable'
                activeMenu='/home'
            />
            <div className="rs-inner-blog pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details">
                                <div className="blog-full">
                                    <h2 className="title">Privacy Policy</h2>
                                    <div className="blog-content legal-document">
                                        <section className="section">
                                            <h5 className="section-title">1. Information We Collect</h5>
                                            <p>We collect information that you provide directly to us, including but not limited to your name, email address, and any other information you choose to provide. This may include personal identification information, contact details, and any other data you voluntarily submit through our website forms, registration processes, or customer support interactions.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">2. How We Use Your Information</h5>
                                            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our services and users. This includes personalizing your experience, processing transactions, sending service-related communications, and conducting research and analysis to enhance our offerings.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">3. Information Sharing</h5>
                                            <p>We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with service providers who assist in our operations, in response to legal requests, or to protect our rights and safety. Any third-party service providers are bound by confidentiality agreements and are prohibited from using your information for any purpose other than providing services to us.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">4. Data Security</h5>
                                            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, regular security assessments, and employee training on data protection best practices. While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">5. Cookies and Tracking</h5>
                                            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. These technologies help us understand how you interact with our website, improve your browsing experience, and provide personalized content. You can control cookie settings through your browser preferences, though disabling cookies may affect certain website functionalities.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">6. Your Rights</h5>
                                            <p>You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your information. This includes the right to request a copy of your data, request corrections to inaccurate information, and request deletion of your data in certain circumstances. We will respond to such requests in accordance with applicable data protection laws.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">7. Changes to This Policy</h5>
                                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes constitutes your acceptance of the updated policy.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">8. Contact Us</h5>
                                            <p>If you have any questions about this Privacy Policy, please contact us through the contact information provided on our website. Our dedicated privacy team is available to address your concerns and provide clarification on any aspect of our data protection practices. We aim to respond to all inquiries within a reasonable timeframe.</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default PrivacyPolicy;
