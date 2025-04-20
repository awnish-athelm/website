import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import ServiceDetailsContent from './ServiceDetailsContent';

// Breadcrumbs Image
import breadcrumbsImg from '../../assets/img/breadcrumbs/2.jpg';


const WebDevelopment = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/web-development'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                breadcrumbsImg={breadcrumbsImg}
                pageTitle='Web Development'
                pageCategory='Services'
                pageName='Web Development'
            />
            {/* breadcrumb-area-end */}
            <ServiceDetailsContent />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default WebDevelopment;