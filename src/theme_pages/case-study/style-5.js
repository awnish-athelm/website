import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import CaseStyleFive from '../../theme_components/CaseStudy/CaseStyleFive';

// Breadcrumb Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';

// Case Images
import image1 from '../../assets/img/project/1.jpg';
import image2 from '../../assets/img/project/2.jpg';
import image3 from '../../assets/img/project/3.jpg';
import image4 from '../../assets/img/project/4.jpg';
import image5 from '../../assets/img/project/5.jpg';
import image6 from '../../assets/img/project/6.jpg';


const CaseStudtyStyleFive = () => {

    return (
        <React.Fragment>
            {/* Header */}
            <Header
                parentMenu='page'
                secondParentMenu='case-studies'
                activeMenu='/case-studies-5'
            />
            {/* Header */}

            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Case Studies Style 5"
                pageName="Case Studies Style 5"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* CaseStudy Start */}
            <div className="rs-project style7 pt-120 pb-120 md-pt-90 md-pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <CaseStyleFive
                                caseClass="project-item"
                                caseImage={image1}
                                caseTitle="Product Engineering"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <CaseStyleFive
                                caseClass="project-item"
                                caseImage={image2}
                                caseTitle="Analytic Solutions"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <CaseStyleFive
                                caseClass="project-item"
                                caseImage={image3}
                                caseTitle="Project Design"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <CaseStyleFive
                                caseClass="project-item"
                                caseImage={image4}
                                caseTitle="Growth Strategies"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <CaseStyleFive
                                caseClass="project-item"
                                caseImage={image5}
                                caseTitle="Platform Integration"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CaseStyleFive
                                caseClass="project-item"
                                caseImage={image6}
                                caseTitle="Innovative Interfaces"
                                caseCategory="Software"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* CaseStudy End */}

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            {/* Footer */}
            <Footer />
            {/* Footer */}

            {/* SearchModal */}
            <SearchModal />
            {/* SearchModal */}
        </React.Fragment>

    );
}


export default CaseStudtyStyleFive;