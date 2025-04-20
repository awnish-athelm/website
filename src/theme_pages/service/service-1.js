import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import ServiceOneMain from '../../theme_components/ServiceOne/ServiceOneMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';


const ServiceOne = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='services'
                activeMenu='/service-1'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Services"
                    titleClass="page-title"
                    pageName="Services"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* ServiceOneMain */}
                <ServiceOneMain />
                {/* ServiceOneMain */}
                
                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>

    );
}


export default ServiceOne;