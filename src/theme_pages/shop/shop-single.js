import React from 'react';
import ShopDetailsMain from './ShopDetails';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import ScrollToTop from '../../theme_components/Common/ScrollTop';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';

const ShopSingle = () => {
    
    return (
        <React.Fragment>

            <Header 
                parentMenu = 'page'
                secondParentMenu = 'shop'
                activeMenu='/shop-single'
            />

            <SiteBreadcrumb
                pageTitle="Digital CC Camera"
                titleClass="page-title new-title pb-10"
                pageCategory="Product"
                pageName="Product Details"
                breadcrumbsImg={bannerbg}
            />

            {/* Shop Main */}
            <ShopDetailsMain />
            {/* Shop Main End */}

            {/* scrolltop-start */}
            <ScrollToTop />
            {/* scrolltop-end */}

            <Footer />

            <SearchModal />
        </React.Fragment>
    );
}


export default ShopSingle;

