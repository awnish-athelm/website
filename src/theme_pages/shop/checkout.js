import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import CheckoutMain from '../../theme_components/Shop/CheckoutMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/4.jpg';

const Checkout = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='shop'
                activeMenu='/checkout'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Checkout"
                    titleClass="page-title"
                    pageName="Checkout"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* CheckoutMain Main */}
                <CheckoutMain />
                {/* CheckoutMain Main */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}

export default Checkout;