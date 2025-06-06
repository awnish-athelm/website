import React from 'react';
import BlogPart from '../../theme_components/Blog/HomeBlogSection';
import SectionTitle from '../../theme_components/Common/SectionTitle/SectionTitleTwo';

import tipsIcon from '../../assets/img/icon/tips.png';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog style2 pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <SectionTitle 
                        titleIcon={tipsIcon}
                        title={<>Recent <span>Technology</span> Updates</>}
                    />
                    <BlogPart />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Blog;