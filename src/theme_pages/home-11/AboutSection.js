import SectionTitle from '../../theme_components/Common/SectionTitle';
import CounterHomeFive from '../../theme_components/Elements/Counter/CounterHomeFive';
import SingleServiceTwo from '../../theme_components/Service/SingleServiceTwo';

// Service Image Icons
import mainIcon1 from '../../assets/img/service/style3/main-img/1.png';
import hoverIcon1 from '../../assets/img/service/style3/hover-img/1.png';
import mainIcon2 from '../../assets/img/service/style3/main-img/2.png';
import hoverIcon2 from '../../assets/img/service/style3/hover-img/2.png';
import mainIcon3 from '../../assets/img/service/style3/main-img/3.png';
import hoverIcon3 from '../../assets/img/service/style3/hover-img/3.png';
import mainIcon4 from '../../assets/img/service/style3/main-img/4.png';
import hoverIcon4 from '../../assets/img/service/style3/hover-img/4.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about pt-120 pb-120 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <SectionTitle
                            sectionClass="sec-title mb-50"
                            subtitleClass="sub-text white-color style4-bg"
                            subtitle="About Us"
                            titleClass="title white-color pb-20"
                            title="Over 25+ Years Helping Brands to Reach Full Potential"
                            descClass="desc white-color"
                            description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world. From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage. Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century"
                        />
                        {/* counter area start */}
                        <CounterHomeFive 
                            counterSectionClass="rs-counter style3 white-color"
                        />
                        {/* counter area end */}
                    </div>
                    <div className="col-lg-7">
                        <div className="rs-services style3 modify3 md-pt-50">
                            <div className="row">
                                <div className="col-md-6 pt-40 sm-pt-0">
                                    <SingleServiceTwo
                                        itemClass="services-item orange-bg mb-20"
                                        mainIcon={mainIcon1}
                                        hoverIcon={hoverIcon1}
                                        Title="High-quality Code"
                                        Text="At vero eos et accusamus etiusto odio praesentium accusamus."
                                    />
                                    <SingleServiceTwo
                                        itemClass="services-item cyan-bg"
                                        mainIcon={mainIcon2}
                                        hoverIcon={hoverIcon2}
                                        Title="Full-stack teams"
                                        Text="At vero eos et accusamus etiusto odio praesentium accusamus."
                                    />
                                </div>
                                <div className="col-md-6 sm-mt-20">
                                    <SingleServiceTwo
                                        itemClass="services-item gold-bg mb-20"
                                        mainIcon={mainIcon3}
                                        hoverIcon={hoverIcon3}
                                        Title="Agile Approach"
                                        Text="At vero eos et accusamus etiusto odio praesentium accusamus."
                                    />
                                    <SingleServiceTwo
                                        itemClass="services-item blue-bg"
                                        mainIcon={mainIcon4}
                                        hoverIcon={hoverIcon4}
                                        Title="High-quality Code"
                                        Text="At vero eos et accusamus etiusto odio praesentium accusamus."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;