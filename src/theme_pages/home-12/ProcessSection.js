import React from 'react';
import SectionTitle from '../../theme_components/Common/SectionTitle';
import PortfolioTabTwo from '../../theme_components/Elements/Tab/PortfolioTabTwo'


const Process = () => {

	return(
        <React.Fragment>
            <div id="rs-blog" className="rs-process style6 white-bg pt-120 pb-120 md-pt-70 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title6 mb-50 text-center"
                        subtitleClass="sub-text new-text"
                        subtitle="A full range of services to achieve your goals"
                        titleClass="title new-title"
                        title="Effective Growth Strategies, Converting Websites & Online Marketing."
                    />

                    <PortfolioTabTwo />
                    
                </div>
            </div>
        </React.Fragment>
	)
}

export default Process