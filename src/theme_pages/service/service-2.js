import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import ServiceTwoMain from '../../theme_components/ServiceTwo/ServiceTwoMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';

const ServiceTwo = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='services'
                activeMenu='/service-2'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Services 2"
                    titleClass="page-title"
                    pageName="Services 2"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* ServiceTwoMain */}
                <ServiceTwoMain />
                {/* ServiceTwoMain */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}


export default ServiceTwo;