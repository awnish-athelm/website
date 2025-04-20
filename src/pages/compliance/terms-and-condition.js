import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';

const TermsAndCondition = () => {
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
                                    <h2 className="title">Terms and Conditions</h2>
                                    <div className="blog-content legal-document">
                                        <section className="section">
                                            <h5 className="section-title">1. Acceptance of Terms</h5>
                                            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. This includes all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">2. Use License</h5>
                                            <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on our website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">3. Disclaimer</h5>
                                            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our website or otherwise relating to such materials or on any sites linked to this site.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">4. Limitations</h5>
                                            <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">5. Revisions and Errata</h5>
                                            <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice. We do not, however, make any commitment to update the materials.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">6. Links</h5>
                                            <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk. We encourage you to review the terms and conditions and privacy policy of any third-party websites that you visit.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">7. Site Terms of Use Modifications</h5>
                                            <p>We may revise these terms of use for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of use. We encourage you to periodically review these terms to stay informed of any changes. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">8. Governing Law</h5>
                                            <p>These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that location. Any claim relating to our website shall be governed by the laws of the jurisdiction without regard to its conflict of law provisions. If any provision of these terms is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these terms, which shall remain in full force and effect.</p>
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

export default TermsAndCondition;
