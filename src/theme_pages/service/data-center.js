import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import ServiceDetailsContent from './ServiceDetailsContent';

// Breadcrumbs Image
import breadcrumbsImg from '../../assets/img/breadcrumbs/1.jpg';


const DataCenter = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='service'
                secondParentMenu='services'
                activeMenu='/data-center'
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                breadcrumbsImg={breadcrumbsImg}
                pageTitle='Data Center'
                pageCategory='Services'
                pageName='Data Center'
            />
            {/* breadcrumb-area-end */}
            <ServiceDetailsContent />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default DataCenter;