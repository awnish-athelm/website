import React from 'react';
import Header from '../../theme_components/Layout/Header';
import Footer from '../../theme_components/Layout/Footer';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import ServiceOneMain from '../../theme_components/ServiceOne/ServiceOneMain';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/3.jpg';


const Services = () => {

    return (
        <React.Fragment>
            <Header
                parentMenu='page'
                secondParentMenu='services'
                activeMenu='/services'
            />
            <div>
                {/* breadcrumb-area-start */}
                <SiteBreadcrumb
                    pageTitle="Services"
                    titleClass="page-title"
                    pageName="Services"
                    breadcrumbsImg={bannerbg}
                />
                {/* breadcrumb-area-start */}

                {/* ServiceOneMain */}
                <ServiceOneMain />
                {/* ServiceOneMain */}
            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>

    );
}


export default Services;