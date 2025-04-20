import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeOnepageMain from './HomeOnepageMain';

const HomeOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader />
            <HomeOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeOnePage;
