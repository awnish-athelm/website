import SectionTitle from '../../theme_components/Common/SectionTitle';
import SingleServiceTwo from '../../theme_components/Service/SingleServiceTwo';

// Service Image Icons
import mainIcon1 from '../../assets/img/service/style2/main-img/1.png';
import hoverIcon1 from '../../assets/img/service/style2/hover-img/1.png';
import mainIcon2 from '../../assets/img/service/style2/main-img/2.png';
import hoverIcon2 from '../../assets/img/service/style2/hover-img/2.png';
import mainIcon3 from '../../assets/img/service/style2/main-img/3.png';
import hoverIcon3 from '../../assets/img/service/style2/hover-img/3.png';
import mainIcon4 from '../../assets/img/service/style2/main-img/4.png';
import hoverIcon4 from '../../assets/img/service/style2/hover-img/4.png';
import mainIcon5 from '../../assets/img/service/style2/main-img/5.png';
import hoverIcon5 from '../../assets/img/service/style2/hover-img/5.png';
import mainIcon6 from '../../assets/img/service/style2/main-img/6.png';
import hoverIcon6 from '../../assets/img/service/style2/hover-img/6.png';

const Service = () => {

    return (
        <div id="rs-service" className="rs-services style3 modify2 pt-100 pb-100 md-pt-74 md-pb-80">
            <div className="container">
                <SectionTitle 
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text gold-color"
                    subtitle="Services"
                    titleClass="title title7"
                    title="Our Featured Services "
                />
                <div className="row">
                    <div className="col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item"
                            mainIcon={mainIcon1}
                            hoverIcon={hoverIcon1}
                            Title="Software Development"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item pink-bg"
                            mainIcon={mainIcon2}
                            hoverIcon={hoverIcon2}
                            Title="Web Development"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item aqua-bg"
                            mainIcon={mainIcon3}
                            hoverIcon={hoverIcon3}
                            Title="Analytic Solutions"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item paste-bg"
                            mainIcon={mainIcon4}
                            hoverIcon={hoverIcon4}
                            Title="Clould & DevOps"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-md-6 sm-mb-20">
                        <SingleServiceTwo
                            itemClass="services-item purple-bg"
                            mainIcon={mainIcon5}
                            hoverIcon={hoverIcon5}
                            Title="Product & Design"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-md-6">
                        <SingleServiceTwo
                            itemClass="services-item green-bg"
                            mainIcon={mainIcon6}
                            hoverIcon={hoverIcon6}
                            Title="Database Administrator"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;