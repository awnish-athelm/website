import React from 'react';
import BlogPart from '../../theme_components/Blog/HomeBlogSection';
import SectionTitle from '../../theme_components/Common/SectionTitle';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-70 md-pb-70">
                <div className="container">                    
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-30"
                        subtitleClass="sub-text"
                        subtitle="Blogs"
                        titleClass="title testi-title"
                        title="Latest Tips & Tricks"
                        descClass="desc"
                        description="We've been building creative tools together for over a decade and have a deep appreciation for software applications"
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;