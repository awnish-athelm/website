import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeTwoOnepageMain from './HomeTwoOnepageMain';

const HomeTwoOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader/>
            <HomeTwoOnepageMain />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeTwoOnePage;
