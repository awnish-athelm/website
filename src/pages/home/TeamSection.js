import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../theme_components/Common/SectionTitle';
import { TeamMembers } from '../../data/TeamMembers';
import { Link } from 'react-router-dom';

const Team = () => {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: true,
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
            1200: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

    return (
        <React.Fragment>
            <div id="rs-team" className="rs-team modify-style pt-120 pb-94 md-pt-80 md-pb-54 bg-white">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title text-center mb-40"
                        subtitleClass="sub-text style4-bg"
                        subtitle="Team"
                        titleClass="title pb-20"
                        title="Expert Professionals"
                    />
                    <OwlCarousel options={options} >
                        {TeamMembers.map(person => <div className="team-item-wrap">
                            <div className="team-wrap">
                                <div className="image-inner">
                                    <img 
                                        src={person.image} 
                                        alt={person.full_name}
                                    />
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h4 className="person-name">
                                    <Link to='/team/team-details'>
                                        {person.full_name}
                                    </Link>
                                </h4>
                                <span className="designation">{person.role}</span>
                                <ul className="team-social">
                                    {person.social_links.facebook && <li>
                                        <a href={`https://www.facebook.com/${person.social_links.facebook}`} target='_blank'><i className="fa fa-facebook-f"></i></a>
                                    </li>}
                                    {person.social_links.linkedin && <li>
                                        <a href={`https://www.linkedin.com/in/${person.social_links.linkedin}`} target='_blank'><i className="fa fa-linkedin"></i></a>
                                    </li>}
                                    {person.social_links.twitter &&<li>
                                        <a href={`https://twitter.com/${person.social_links.twitter}`} target='_blank'><i className="fa fa-twitter"></i></a>
                                    </li>}
                                    {person.social_links.pinterest &&<li>
                                        <a href={`https://www.pinterest.com/${person.social_links.pinterest}`} target='_blank'><i className="fa fa-pinterest"></i></a>
                                    </li>}
                                    {person.social_links.instagram &&<li>
                                        <a href={`https://www.instagram.com/${person.social_links.instagram}`} target='_blank'><i className="fa fa-instagram"></i></a>
                                    </li>}
                                </ul>
                            </div>
                        </div>)}
                    </OwlCarousel>
                    <div className="line-inner">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>                
            </div>
        </React.Fragment>
    )
}

export default Team;