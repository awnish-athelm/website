import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './NavigationMenu';

const MobileNavigationMenu = ({ setMenuOpen, menuOpen, activeMenu }) => {

	const [home, setHome] = useState(false)
	const [homeMultipage, setHomeMultipage] = useState(false)
	const [homeOnepage, setHomeOnepage] = useState(false)
	const [about, setAbout] = useState(false)
	const [services, setServices] = useState(false)
	const [blog, setBlog] = useState(false)
	const [pages, setPages] = useState(false)
	const [servicePages, setServicePages] = useState(false)
	const [caseStudies, setCaseStudies] = useState(false)
	const [shopPages, setShopPages] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'homeMultipage') {
			setHome(true)
			setHomeMultipage(!homeMultipage)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'homeOnepage') {
			setHome(true)
			setHomeMultipage(false)
			setHomeOnepage(!homeOnepage)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'about') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(!about)
			setServices(false)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'services') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(!services)
			setBlog(false)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(!blog)
			setPages(false)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'pages') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(!pages)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'servicePages') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(true)
			setServicePages(!servicePages)
			setCaseStudies(false)
			setShopPages(false)
		}
		else if (menu === 'caseStudies') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(true)
			setServicePages(false)
			setCaseStudies(!caseStudies)
			setShopPages(false)
		}
		else if (menu === 'shopPages') {
			setHome(false)
			setHomeMultipage(false)
			setHomeOnepage(false)
			setAbout(false)
			setServices(false)
			setBlog(false)
			setPages(true)
			setServicePages(false)
			setCaseStudies(false)
			setShopPages(!shopPages)
		}
	};

	const handleClick = (e) => {
		setMenuOpen(false);
	};

	const menuMap = [
        new MenuItem("#about-us-section", "About Us"),
        new MenuItem("#service-section", "Offerings"),
        new MenuItem("#contact-form-section", "Contact"),
        new MenuItem("#team-section", "Team"),
    ];

	return (
		<div className="container relative">
			<div className={menuOpen ? "mobile-menu-part open" : "mobile-menu-part"}>
				<div className="mobile-menu">
					<ul className="nav-menu">
						{menuMap.map(item => <li>
							<a href={item.path} onClick={handleClick}>{item.name}</a>
						</li>)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MobileNavigationMenu;