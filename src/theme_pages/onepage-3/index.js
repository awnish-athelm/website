import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeThreeOnepageMain from './HomeThreeOnepageMain';

const HomeThreeOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeThreeOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeThreeOnePage;
