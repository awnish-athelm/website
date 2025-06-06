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
        <div id="rs-service" className="rs-services style3 pt-110 pb-100 md-pt-74 md-pb-60">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text"
                    subtitle="Services"
                    titleClass="title testi-title"
                    title="Our Featured Services"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item"
                            prefix="01"
                            mainIcon={mainIcon1}
                            hoverIcon={hoverIcon1}
                            Title="Software Development"
                            serviceURL="software-development"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item pink-bg"
                            prefix="02"
                            mainIcon={mainIcon2}
                            hoverIcon={hoverIcon2}
                            Title="Web Development"
                            serviceURL="web-development"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item aqua-bg"
                            prefix="03"
                            mainIcon={mainIcon3}
                            hoverIcon={hoverIcon3}
                            Title="Analytic Solutions"
                            serviceURL="analytic-solutions"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item paste-bg"
                            prefix="04"
                            mainIcon={mainIcon4}
                            hoverIcon={hoverIcon4}
                            Title="Clould & DevOps"
                            serviceURL="clould-&-devOps"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item purple-bg"
                            prefix="05"
                            mainIcon={mainIcon5}
                            hoverIcon={hoverIcon5}
                            Title="Product & Design"
                            serviceURL="product-&-design"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-20">
                        <SingleServiceTwo
                            itemClass="services-item green-bg"
                            prefix="06"
                            mainIcon={mainIcon6}
                            hoverIcon={hoverIcon6}
                            Title="Database Administrator"
                            serviceURL="database-administrator"
                            Text="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;