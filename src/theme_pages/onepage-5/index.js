import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeFiveOnepageMain from './HomeFiveOnepageMain';

const HomeFiveOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeFiveOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeFiveOnePage;
