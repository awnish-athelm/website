import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import AboutMain from './AboutMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/1.jpg';

const About = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='about'
                activeMenu="/about"
            />
            <main>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="About"
                    titleClass="page-title"
                    pageName="About"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* About Main */}
                <AboutMain />
                {/* About Main */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}
            </main>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}

export default About;