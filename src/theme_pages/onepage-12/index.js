import React from 'react';
import Footer from '../../theme_components/Layout/Footer';
import HomeTwelveOnepageMain from './HomeTwelveOnepageMain';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import OnepageHeaderStyleThree from '../../theme_components/Layout/Header/OnepageHeaderThree';

const HomeTwelveOnePage = () => {
    return (
        <React.Fragment>
            <OnepageHeaderStyleThree 
                item5='Testimonial'
                item6='Process'
            />
            <HomeTwelveOnepageMain />
            <Footer
                footerClass="rs-footer style1"
            />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeTwelveOnePage;
