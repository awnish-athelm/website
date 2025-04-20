import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeSixOnepageMain from './HomeSixOnepageMain';

const HomeSixOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeSixOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeSixOnePage;
