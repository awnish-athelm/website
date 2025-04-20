import SectionTitle from '../../components/Common/SectionTitle';
import CounterHome from '../../components/Elements/Counter/CounterHome';
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
import { Metrics } from '../../app/Constants';

const About = () => {

    return (
        <div id="rs-about" className="rs-about pt-120 md-pt-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <SectionTitle
                            sectionClass="sec-title mb-50"
                            subtitleClass="sub-text style4-bg"
                            subtitle="Transform Your Business"
                            titleClass="title pb-20"
                            title={`${Metrics.MaxYearsExperience}+ Years of Proven Success in Digital Transformation`}
                            descClass="desc"
                            description={`At AtHelm, we're not just another tech company - we're your strategic partner in growth. With over ${Metrics.MaxYearsExperience} years of hands-on experience, we've helped hundreds of businesses transform their digital presence and achieve remarkable results. Our expert team specializes in creating custom software solutions, mobile apps, and AI-powered systems that drive real business growth. Whether you're a startup looking to disrupt the market or an established enterprise seeking digital transformation, we have the expertise to make it happen.`}
                        />
                        {/* counter area start */}
                        <CounterHome />
                        {/* counter area end */}
                    </div>
                    <div className="col-lg-7">
                        <div className="rs-services style3 md-pt-50">
                            <div className="row">
                                <div className="col-md-6 pr-10 pt-40 sm-pt-0 sm-pr-0 sm-pl-0">
                                    <SingleServiceTwo
                                        itemClass="services-item mb-20"
                                        mainIcon={mainIcon1}
                                        hoverIcon={hoverIcon1}
                                        Title="Enterprise-Grade Development"
                                        serviceURL="high-quality-code"
                                        Text="We deliver robust, scalable solutions built with industry best practices and cutting-edge technologies to future-proof your business."
                                    />
                                    <SingleServiceTwo
                                        itemClass="services-item cyan-bg"
                                        mainIcon={mainIcon2}
                                        hoverIcon={hoverIcon2}
                                        Title="Dedicated Development Teams"
                                        serviceURL="full-quality-teams"
                                        Text="Get access to our elite team of full-stack developers, designers, and project managers who work exclusively on your project."
                                    />
                                </div>
                                <div className="col-md-6 pl-10 sm-pr-0 sm-pl-0 sm-mt-20">
                                    <SingleServiceTwo
                                        itemClass="services-item gold-bg mb-20"
                                        mainIcon={mainIcon3}
                                        hoverIcon={hoverIcon3}
                                        Title="Rapid Development Cycles"
                                        serviceURL="agile-approach"
                                        Text="Our agile methodology ensures faster time-to-market with continuous delivery of high-value features and regular client feedback."
                                    />
                                    <SingleServiceTwo
                                        itemClass="services-item blue-bg"
                                        mainIcon={mainIcon4}
                                        hoverIcon={hoverIcon4}
                                        Title="Enterprise Security & Scalability"
                                        serviceURL="security-and-scalability"
                                        Text="We build with enterprise-grade security and scalability, ensuring your systems can handle growth while maintaining the highest security standards."
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