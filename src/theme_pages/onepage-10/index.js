import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeTenOnepageMain from './HomeTenOnepageMain';

const HomeTenOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader />
            <HomeTenOnepageMain />
            <Footer 
                footerClass="rs-footer" 
            />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeTenOnePage;
