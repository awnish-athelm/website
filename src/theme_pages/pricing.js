import React from 'react';
import Header from '../theme_components/Layout/Header';
import Footer from '../theme_components/Layout/Footer';
import SearchModal from '../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../theme_components/Common/Breadcumb';
import ScrollToTop from '../theme_components/Common/ScrollTop';
import PricingMain from '../theme_components/Pricing';

// Breadcrumbs Background Image
import bannerbg from '../assets/img/breadcrumbs/2.jpg';

const Pricing = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='pages'
                activeMenu='/pricing'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Pricing"
                    titleClass="page-title"
                    pageName="Pricing"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* Price Main */}
                <PricingMain />
                {/* Price Main */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}

export default Pricing;