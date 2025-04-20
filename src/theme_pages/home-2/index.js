import React from 'react';
import HeaderStyleTwo from '../../theme_components/Layout/Header/HeaderStyleTwo';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeTwoMain from './HomeTwoMain';
import Footer from '../../theme_components/Layout/Footer';

const HomeTwo = () => {
    return (
        <React.Fragment>
            <HeaderStyleTwo
                parentMenu='home'
                secondParentMenu='multipage'
                activeMenu="/home-2"
            />
            <HomeTwoMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTwo;

