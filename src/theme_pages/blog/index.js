import React from 'react';
import Header from '../../theme_components/Layout/Header';
import BlogMain from '../../theme_components/Blog';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import Footer from '../../theme_components/Layout/Footer';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import SearchModal from '../../theme_components/Layout/Header/SearchModal';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/4.jpg';

const Blog = () => {
    return (
        <React.Fragment>
            <Header
                parentMenu='blog'
                activeMenu='/blog'
            />
            <div>
                <SiteBreadcrumb
                    pageTitle="Blog"
                    titleClass="page-title"
                    pageName="Blog"
                    breadcrumbsImg={bannerbg}
                />

                {/* Blog Main */}
                <BlogMain />
                {/* Blog Main End */}

                {/* scrolltop-start */}
                <ScrollToTop />
                {/* scrolltop-end */}

            </div>
            <Footer />
            <SearchModal />
        </React.Fragment>
    );
}


export default Blog;

