import React from 'react';
import HeaderStyleThree from '../../theme_components/Layout/Header/HeaderStyleThree';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import Footer from '../../theme_components/Layout/Footer';
import HomeFourMain from './HomeFourMain';

const HomeFour = () => {
    return (
        <React.Fragment>
            <HeaderStyleThree
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu='/home-4'
            />
            <HomeFourMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeFour;