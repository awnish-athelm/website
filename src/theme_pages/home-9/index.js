import React from 'react';
import OffWrap from '../../theme_components/Layout/Header/OffWrap';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../theme_components/Layout/Header/HeaderStyleFour';
import Footer from '../../theme_components/Layout/Footer';
import HomeNineMain from './HomeNineMain';

import logo from '../../assets/img/logo/logo.svg';

const HomeNine = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <HeaderStyleFour
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify1 header-transparent'
                headerNormalLogo={logo}
                mobileNormalLogo={logo}
                offCanvas='enable'
                primaryMenuToggle='enable'
                activeMenu='/home-9'
            />
            <HomeNineMain />
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeNine;