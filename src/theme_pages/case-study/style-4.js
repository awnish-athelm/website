import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import CaseStyleFour from '../../theme_components/CaseStudy/CaseStyleFour';

// Breadcrumb Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';

// Case Images
import image1 from '../../assets/img/project/style3/1.jpg';
import image2 from '../../assets/img/project/style3/2.jpg';
import image3 from '../../assets/img/project/style3/3.jpg';
import image4 from '../../assets/img/project/style3/4.jpg';
import image5 from '../../assets/img/project/style3/5.jpg';
import image6 from '../../assets/img/project/style3/6.jpg';


const CaseStudtyStyleFour = () => {

    return (
        <React.Fragment>
            {/* Header */}
            <Header
                parentMenu='page'
                secondParentMenu='case-studies'
                activeMenu='/case-studies-4'
            />
            {/* Header */}

            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Case Studies Style 4"
                pageName="Case Studies Style 4"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* CaseStudy Start */}
            <div className="rs-project style4 gray-color pt-120 pb-120 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <CaseStyleFour
                                caseClass="project-item"
                                caseImage={image1}
                                caseTitle="Product Engineering"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <CaseStyleFour
                                caseClass="project-item"
                                caseImage={image2}
                                caseTitle="Analytic Solutions"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <CaseStyleFour
                                caseClass="project-item"
                                caseImage={image3}
                                caseTitle="Project Design"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <CaseStyleFour
                                caseClass="project-item"
                                caseImage={image4}
                                caseTitle="Growth Strategies"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <CaseStyleFour
                                caseClass="project-item"
                                caseImage={image5}
                                caseTitle="Platform Integration"
                                caseCategory="Software"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CaseStyleFour
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


export default CaseStudtyStyleFour;