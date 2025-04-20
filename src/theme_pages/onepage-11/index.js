import React from 'react';
import Footer from '../../theme_components/Layout/Footer';
import HomeElevenOnepageMain from './HomeElevenOnepageMain';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import OnepageHeaderStyleTwo from '../../theme_components/Layout/Header/OnepageHeaderTwo';

import footerWhiteLogo from '../../assets/img/logo/white-logo.svg';

const HomeElevenOnePage = () => {
    return (
        <React.Fragment>
            <div className="black-bg">
                <OnepageHeaderStyleTwo />
                <HomeElevenOnepageMain />
                <Footer
                    footerLogo={footerWhiteLogo}
                    footerClass="rs-footer style2 modify1 black-dark"
                />
                <SearchModal />
            </div>
        </React.Fragment>
    );
}

export default HomeElevenOnePage;
