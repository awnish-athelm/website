import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../theme_components/Common/SectionTitle';
import ProgressBar from '../../theme_components/Elements/Progress/ProgressBar';

// About Image
import AboutImage from '../../assets/img/about/about-5.png';
import { Metrics } from '../../app/Constants';

const ExpertiseProgress = (props) => {
    const {progress, color, label} = props;
    return <ProgressBar
        completed={progress}
        height={7}
        boxbg={"#eeeeee"}
        figurebg={color}
        ProgressBox="progress-box"
        ProgressFigure="progress-figure"
        ProgressCount="Progress-count"
        ProgressLabel="progress-label"
        label={label}
        ProgressParent="main-div"
    />
}

const OurExpertise = (props) => {
    return (
        <div className="rs-about style2 modify1 pt-120 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 hidden-md">
                        <div className="images">
                            <img
                                src={AboutImage}
                                alt="about"
                            /> 
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        {/* Section Title Start */}
                        <SectionTitle
                            sectionClass="sec-title mb-30"
                            subtitleClass="sub-text style4-bg"
                            subtitle="Our Expertise"
                            titleClass="title pb-20"
                            title="We Are Increasing Business Success With Technology"
                            descClass="desc"
                            description={`With ${Metrics.MaxYearsExperience} years of industry experience, we've mastered the art of crafting compelling pitch decks, securing investments, assembling high-performing teams, and developing cutting-edge software solutions and mobile applications for clients worldwide.`}
                        />
                        {/* Section Title End */}
                        <div className="rs-skillbar style1 home4">
                            <ExpertiseProgress progress={100} color="#FD6509" label="Full-Stack Development"/>
                            <ExpertiseProgress progress={98} color="#F00674" label="Cloud & DevOps Solutions"/>
                            <ExpertiseProgress progress={95} color="#03DEA8" label="AI & Machine Learning"/>
                            <ExpertiseProgress progress={97} color="#8A2BE2" label="Enterprise Architecture"/>
                            <ExpertiseProgress progress={96} color="#0A99FD" label="Digital Transformation"/>
                            <ExpertiseProgress progress={99} color="#FF6B6B" label="Team Augmentation"/>
                            <div className="btn-part mt-46">
                                <a className="readon started" href="#contact-form-section">Get Started</a>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurExpertise;