import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import AccountMain from '../../theme_components/Shop/AccountMain';
import ScrollToTop from '../../theme_components/Common/ScrollTop';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/2.jpg';

const MyAccount = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='shop'
                activeMenu='/my-account'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="My Account"
                    titleClass="page-title"
                    pageName="My Accpunt"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* AccountMain Main */}
                <AccountMain />
                {/* AccountMain Main */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}

export default MyAccount;