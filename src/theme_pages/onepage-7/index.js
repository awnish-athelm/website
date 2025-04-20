import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeSevenOnepageMain from './HomeSevenOnepageMain';

const HomeSevenOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeSevenOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeSevenOnePage;
