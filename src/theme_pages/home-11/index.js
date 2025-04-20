import React from 'react';
import OffWrap from '../../theme_components/Layout/Header/OffWrap';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../theme_components/Layout/Header/HeaderStyleFour';
import Footer from '../../theme_components/Layout/Footer';
import HomeElevenMain from './HomeElevenMain';

import footerWhiteLogo from '../../assets/img/logo/white-logo.svg';

const HomeEleven = () => {
    return (
        <React.Fragment>
            <div className="black-bg">
                <OffWrap />
                <HeaderStyleFour
                    parentMenu='home'
                    secondParentMenu='multipage'
                    headerClass='rs-header style3 modify2 header-transparent'
                    offCanvas='enable'
                    activeMenu='/home-11'
                />
                <HomeElevenMain />
                <Footer
                    footerLogo={footerWhiteLogo}
                    footerClass="rs-footer style2 modify1 black-dark"
                />
                <SearchModal />
            </div>
        </React.Fragment>
    );
}


export default HomeEleven;