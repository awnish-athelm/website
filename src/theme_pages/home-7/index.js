import React from 'react';
import HeaderStyleSix from '../../theme_components/Layout/Header/HeaderStyleSix';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import Footer from '../../theme_components/Layout/Footer';
import HomeSevenMain from './HomeSevenMain';

const HomeSeven = () => {
    return (
        <React.Fragment>
            <HeaderStyleSix
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu='/home-7'
            />
            <HomeSevenMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeSeven;