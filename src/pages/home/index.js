import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SearchModal from '../../components/Layout/Header/SearchModal';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Main from './Main';

const HomeFive = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify2 header-transparent'
                offCanvas='enable'
                activeMenu='/home'
            />
            <Main />
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeFive;