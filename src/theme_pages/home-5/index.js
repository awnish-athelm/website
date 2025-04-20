import React from 'react';
import OffWrap from '../../theme_components/Layout/Header/OffWrap';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HeaderStyleFour from '../../theme_components/Layout/Header/HeaderStyleFour';
import Footer from '../../theme_components/Layout/Footer';
import HomeFiveMain from './HomeFiveMain';

const HomeFive = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <HeaderStyleFour
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify2 header-transparent'
                offCanvas='enable'
                activeMenu='/home-5'
            />
            <HomeFiveMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeFive;