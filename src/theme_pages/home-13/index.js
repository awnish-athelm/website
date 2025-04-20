import React from 'react';
import OffWrap from '../../theme_components/Layout/Header/OffWrap';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../theme_components/Layout/Header/HeaderStyleFour';
import Footer from '../../theme_components/Layout/Footer';
import HomeThirteenMain from './HomeThirteenMain';

import logo from '../../assets/img/logo/white-logo.svg';

const HomeThirteen = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <HeaderStyleFour
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify3 header-transparent'
                headerNormalLogo={logo}
                offCanvas='enable'
                activeMenu='/home-13'
            />
            <HomeThirteenMain />
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeThirteen;