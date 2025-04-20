import React from 'react';
import OnepageHeader from '../../theme_components/Layout/Header/OnepageHeader';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import HomeNineOnepageMain from './HomeNineOnepageMain';

const HomeNineOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeader
                item5='Testimonial'
            />
            <HomeNineOnepageMain />
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeNineOnePage;
