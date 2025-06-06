import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../theme_components/Common/SectionTitle';
import SingleTeamTwo from '../../theme_components/Team/SingleTeamTwo';

// Team Members
import teamimg1 from '../../assets/img/team/1.jpg';
import teamimg2 from '../../assets/img/team/2.jpg';
import teamimg3 from '../../assets/img/team/3.jpg';
import teamimg4 from '../../assets/img/team/4.jpg';
import teamimg5 from '../../assets/img/team/5.jpg';

const Team = () => {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
            },
            768: {
                items: 2,
                stagePadding: 0,

            },
            992: {
                items: 2,
                stagePadding: 0,

            },
            1200: {
                items: 3,
                stagePadding: 0,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

    return (
        <React.Fragment>
            <div id="rs-team" className="rs-team style2 modify-style pt-110 pb-120 md-pt-74 md-pb-80">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-50"
                        titleClass="title testi-title"
                        title="Expert IT Consultants"
                        descClass="desc desc3"
                        description="Perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                    />
                    <OwlCarousel options={options} >
                        <SingleTeamTwo
                            itemClass="team-item"
                            teamImage={teamimg1}
                            Title="Makhaia Antitni"
                            Designation="President & CEO"
                        />

                        <SingleTeamTwo
                            itemClass="team-item"
                            teamImage={teamimg2}
                            Title="Corey Anderson"
                            Designation="CEO & Founder"
                        />

                        <SingleTeamTwo
                            itemClass="team-item"
                            teamImage={teamimg3}
                            Title="Masud Rana"
                            Designation="Web Developer"
                        />

                        <SingleTeamTwo
                            itemClass="team-item"
                            teamImage={teamimg4}
                            Title="Najmul Huda"
                            Designation="Digital Marketer"
                        />

                        <SingleTeamTwo
                            itemClass="team-item"
                            teamImage={teamimg5}
                            Title="Rushali Rumi"
                            Designation="Design Lead"
                        />
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;