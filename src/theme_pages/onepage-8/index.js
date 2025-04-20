import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeEightOnepageMain from './HomeEightOnepageMain';

import footerLightLogo from '../../assets/img/logo/white-logo.svg';

const HomeEightOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader
                item4='Process'
                item5='Testimonial'
            />
            <HomeEightOnepageMain />
            <Footer
                footerClass="rs-footer style2"
                footerLogo={footerLightLogo}
            />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeEightOnePage;
