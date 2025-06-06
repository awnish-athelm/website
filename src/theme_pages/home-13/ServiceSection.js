
import SectionTitle from '../../theme_components/Common/SectionTitle/SectionTitle';
import SingleService from '../../theme_components/Service/SingleService';

// Service Image Icons
import serviceIcon1 from '../../assets/img/service/style10/1.png';
import serviceIcon2 from '../../assets/img/service/style10/2.png';
import serviceIcon3 from '../../assets/img/service/style10/3.png';

const Service = () => {

    return (
        <div id="rs-service" className="rs-services style9 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-50"
                    titleClass="title testi-title"
                    title="Featured Brand Strategies and UX design"
                    descClass="desc desc3"
                    description="Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <SingleService 
                            itemClass="services-item"
                            serviceImage={serviceIcon1}
                            serviceURL="branding"
                            Title="Branding" 
                            Text="Bring to the table win-win survival strate gies to ensure proactive domi nation end toe forward" 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <SingleService 
                            itemClass="services-item gray-light-bg"
                            serviceImage={serviceIcon2}
                            serviceURL="strategy"
                            Title="Strategy" 
                            Text="Bring to the table win-win survival strate gies to ensure proactive domi nation end toe forward" 
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <SingleService 
                            itemClass="services-item pink-bg"
                            serviceImage={serviceIcon3}
                            serviceURL="development"
                            Title="Development" 
                            Text="Bring to the table win-win survival strate gies to ensure proactive domi nation end toe forward" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;