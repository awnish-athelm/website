import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../theme_components/Common/SectionTitle';
import SingleTeam from '../../theme_components/Team/SingleTeam';

// Team Members
import teamimg1 from '../../assets/img/team/1.jpg';
import teamimg2 from '../../assets/img/team/2.jpg';
import teamimg3 from '../../assets/img/team/3.jpg';
import teamimg4 from '../../assets/img/team/4.jpg';
import teamimg5 from '../../assets/img/team/5.jpg';
import teamimg6 from '../../assets/img/team/6.jpg';
import teamimg7 from '../../assets/img/team/7.jpg';

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
                dots: false,
            },
            768: {
                items: 2,
                stagePadding: 0,
                dots: true,
            },
            992: {
                items: 2,
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
            <div id="rs-team" className="rs-team modify-style modify1 pt-120 pb-94 md-pt-80 md-pb-54">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 text-center mb-30"
                        subtitleClass="sub-text style-bg white-color"
                        subtitle="Team"
                        titleClass="title white-color"
                        title="Expert IT Consultants"
                    />
                    <OwlCarousel options={options} >
                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg1}
                            Title="Makhaia Antitni"
                            Designation="President & CEO"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg2}
                            Title="Corey Anderson"
                            Designation="CEO & Founder"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg3}
                            Title="Masud Rana"
                            Designation="Web Developer"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg4}
                            Title="Najmul Huda"
                            Designation="Digital Marketer"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg5}
                            Title="Rushali Rumi"
                            Designation="Design Lead"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg6}
                            Title="Abu Sayed"
                            Designation="App Developer"
                        />

                        <SingleTeam
                            itemClass="team-item-wrap"
                            teamImage={teamimg7}
                            Title="Sonia Akhter"
                            Designation="Graphic Artist"
                        />
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;