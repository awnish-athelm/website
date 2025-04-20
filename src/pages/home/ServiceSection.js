import { Link } from 'react-router-dom';
import SectionTitle from '../../components/Common/SectionTitle';
import SingleServiceTwo from '../../components/Service/SingleServiceTwo';
import { ServiceList } from '../../data/Services';

const SERVICE_COLOR_ORDER = [
    "blue-bg",
    "",
    "aqua-bg",
    "paste-bg",
    "pink-bg",
    "purple-bg",
    "green-bg",
    "cyan-bg",
    "gold-bg",
];

const Service = () => {
    return (
        <div id="rs-service" className="rs-services style3 rs-rain-animate gray-bg pt-120 pb-100 md-pt-70 md-pb-60">
            <div className="container">
                <div className="row md-mb-60">
                    <div className="col-lg-6 mb-60 md-mb-20">
                        <SectionTitle
                            sectionClass="sec-title mb-50"
                            subtitleClass="sub-text style4-bg"
                            subtitle="Services"
                            titleClass="title testi-title"
                            title="What Solutions We Provide to Our Valued Customers"
                        />
                    </div>
                    <div className="col-lg-6 mb-60 md-mb-0">
                        <div className="btn-part text-right mt-60 md-mt-0 md-text-left">
                            <a className="readon started" href="#contact-form-section">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {ServiceList.map((service, index) => <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass={`services-item ${SERVICE_COLOR_ORDER[index%SERVICE_COLOR_ORDER.length]}`}
                            prefix={(index+1).toString().padStart(2,'0')}
                            mainIcon={service.mainIcon}
                            hoverIcon={service.hoverIcon}
                            Title={service.title}
                            Text={service.text}
                        />
                    </div>)}
                </div>
            </div>
            <div className="line-inner">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Service;