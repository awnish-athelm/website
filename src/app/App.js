import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';



//Custom Components

import ThemeHome from '../theme_pages/home';
import ThemeHomeTwo from '../theme_pages/home-2';
import ThemeHomeThree from '../theme_pages/home-3';
import ThemeHomeFour from '../theme_pages/home-4';
import ThemeHomeFive from '../theme_pages/home-5';
import ThemeHomeSix from '../theme_pages/home-6';
import ThemeHomeSeven from '../theme_pages/home-7';
import ThemeHomeEight from '../theme_pages/home-8';
import ThemeHomeNine from '../theme_pages/home-9';
import ThemeHomeTen from '../theme_pages/home-10';
import ThemeHomeEleven from '../theme_pages/home-11';
import ThemeHomeTwelve from '../theme_pages/home-12';
import ThemeHomeThirteen from '../theme_pages/home-13';
import ThemeHomeOnePage from '../theme_pages/onepage-1';
import ThemeHomeTwoOnePage from '../theme_pages/onepage-2';
import ThemeHomeThreeOnePage from '../theme_pages/onepage-3';
import ThemeHomeFourOnePage from '../theme_pages/onepage-4';
import ThemeHomeFiveOnePage from '../theme_pages/onepage-5';
import ThemeHomeSixOnePage from '../theme_pages/onepage-6';
import ThemeHomeSevenOnePage from '../theme_pages/onepage-7';
import ThemeHomeEightOnePage from '../theme_pages/onepage-8';
import ThemeHomeNineOnePage from '../theme_pages/onepage-9';
import ThemeHomeTenOnePage from '../theme_pages/onepage-10';
import ThemeHomeElevenOnePage from '../theme_pages/onepage-11';
import ThemeHomeTwelveOnePage from '../theme_pages/onepage-12';
import ThemeHomeThirteenOnePage from '../theme_pages/onepage-13';
import ThemeAbout from '../theme_pages/about';
import ThemeTeam from '../theme_pages/team';
import ThemeTeamDetails from '../theme_pages/team/team-details';
import ThemeBlog from '../theme_pages/blog';
import ThemeBlogDetails from '../theme_pages/blog/blog-details';
import ThemeServices from '../theme_pages/service';
import ThemeServiceOne from '../theme_pages/service/service-1';
import ThemeServiceTwo from '../theme_pages/service/service-2';
import ThemeServiceThree from '../theme_pages/service/service-3';
import ThemeServiceDetails from '../theme_pages/service/service-details';
import ThemeSoftwareDevelopment from '../theme_pages/service/software-development';
import ThemeWebDevelopment from '../theme_pages/service/web-development';
import ThemeAnalyticSolutions from '../theme_pages/service/analytic-solutions';
import ThemecloudAndDevops from '../theme_pages/service/cloud-and-devops';
import ThemeProjectDesign from '../theme_pages/service/project-design';
import ThemeDataCenter from '../theme_pages/service/data-center';
import ThemeCaseStudtyStyleOne from '../theme_pages/case-study/style-1';
import ThemeCaseStudtyStyleTwo from '../theme_pages/case-study/style-2';
import ThemeCaseStudtyStyleThree from '../theme_pages/case-study/style-3';
import ThemeCaseStudtyStyleFour from '../theme_pages/case-study/style-4';
import ThemeCaseStudtyStyleFive from '../theme_pages/case-study/style-5';
import ThemeCaseStudtyStyleSix from '../theme_pages/case-study/style-6';
import ThemeCaseStudtyStyleSeven from '../theme_pages/case-study/style-7';
import ThemeShop from '../theme_pages/shop';
import ThemeShopSingle from '../theme_pages/shop/shop-single';
import ThemeCart from '../theme_pages/shop/cart';
import ThemeCheckout from '../theme_pages/shop/checkout';
import ThemeMyAccount from '../theme_pages/shop/my-account';
import ThemeFaq from '../theme_pages/faq';
import ThemePricing from '../theme_pages/pricing';
import ThemeContact from '../theme_pages/contact';
import Error from '../theme_pages/404';
import LoadTop from '../theme_components/Common/ScrollTop/LoadTop'

//Live Pages
import Home from '../pages/home'
import GPSTool from '../pages/tools/gps_nosie_remover'


const App = () => {
    return (
        <div className='App'>
            <Router>  
                <LoadTop />          
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/redirect" component={Home} />
                    <Route path="/tools/gps-noise-remover" component={GPSTool} />

                    <Route path="/theme/home" component={ThemeHome} />
                    <Route path="/theme/home-2" component={ThemeHomeTwo} />
                    <Route path="/theme/home-3" component={ThemeHomeThree} />
                    <Route path="/theme/home-4" component={ThemeHomeFour} />
                    <Route path="/theme/home-5" component={ThemeHomeFive} />
                    <Route path="/theme/home-6" component={ThemeHomeSix} />
                    <Route path="/theme/home-7" component={ThemeHomeSeven} />
                    <Route path="/theme/home-8" component={ThemeHomeEight} />
                    <Route path="/theme/home-9" component={ThemeHomeNine} />
                    <Route path="/theme/home-10" component={ThemeHomeTen} />
                    <Route path="/theme/home-11" component={ThemeHomeEleven} />
                    <Route path="/theme/home-12" component={ThemeHomeTwelve} />
                    <Route path="/theme/home-13" component={ThemeHomeThirteen} />
                    <Route path="/theme/onepage-1" component={ThemeHomeOnePage} />
                    <Route path="/theme/onepage-2" component={ThemeHomeTwoOnePage} />
                    <Route path="/theme/onepage-3" component={ThemeHomeThreeOnePage} />
                    <Route path="/theme/onepage-4" component={ThemeHomeFourOnePage} />
                    <Route path="/theme/onepage-5" component={ThemeHomeFiveOnePage} />
                    <Route path="/theme/onepage-6" component={ThemeHomeSixOnePage} />
                    <Route path="/theme/onepage-7" component={ThemeHomeSevenOnePage} />
                    <Route path="/theme/onepage-8" component={ThemeHomeEightOnePage} />
                    <Route path="/theme/onepage-9" component={ThemeHomeNineOnePage} />
                    <Route path="/theme/onepage-10" component={ThemeHomeTenOnePage} />
                    <Route path="/theme/onepage-11" component={ThemeHomeElevenOnePage} />
                    <Route path="/theme/onepage-12" component={ThemeHomeTwelveOnePage} />
                    <Route path="/theme/onepage-13" component={ThemeHomeThirteenOnePage} />
                    <Route path="/theme/about" component={ThemeAbout} />
                    <Route path="/theme/service" exact component={ThemeServices} />
                    <Route path="/theme/service/service-1" component={ThemeServiceOne} />
                    <Route path="/theme/service/service-2" component={ThemeServiceTwo} />
                    <Route path="/theme/service/service-3" component={ThemeServiceThree} />
                    <Route path="/theme/service/service-details" component={ThemeServiceDetails} />
                    <Route path="/service/software-development" component={ThemeSoftwareDevelopment} />
                    <Route path="/theme/service/web-development" component={ThemeWebDevelopment} />
                    <Route path="/theme/service/analytic-solutions" component={ThemeAnalyticSolutions} />
                    <Route path="/theme/service/cloud-and-devops" component={ThemecloudAndDevops} />
                    <Route path="/theme/service/project-design" component={ThemeProjectDesign} />
                    <Route path="/theme/service/data-center" component={ThemeDataCenter} />
                    <Route path="/theme/team" exact component={ThemeTeam} />
                    <Route path="/theme/team/team-details" component={ThemeTeamDetails} />
                    <Route path="/theme/blog" exact component={ThemeBlog} />
                    <Route path="/theme/blog/blog-details" component={ThemeBlogDetails} />
                    <Route path="/theme/case-study/style-1" component={ThemeCaseStudtyStyleOne} />
                    <Route path="/theme/case-study/style-2" component={ThemeCaseStudtyStyleTwo} />
                    <Route path="/theme/case-study/style-3" component={ThemeCaseStudtyStyleThree} />
                    <Route path="/theme/case-study/style-4" component={ThemeCaseStudtyStyleFour} />
                    <Route path="/theme/case-study/style-5" component={ThemeCaseStudtyStyleFive} />
                    <Route path="/theme/case-study/style-6" component={ThemeCaseStudtyStyleSix} />
                    <Route path="/theme/case-study/style-7" component={ThemeCaseStudtyStyleSeven} />
                    <Route path="/theme/shop" exact component={ThemeShop} />
                    <Route path="/theme/shop/shop-single" component={ThemeShopSingle} />
                    <Route path="/theme/shop/cart" component={ThemeCart} />
                    <Route path="/theme/shop/checkout" component={ThemeCheckout} />
                    <Route path="/theme/shop/my-account" component={ThemeMyAccount} />
                    <Route path="/theme/faq" component={ThemeFaq} />
                    <Route path="/theme/pricing" component={ThemePricing} />
                    <Route path="/theme/contact" component={ThemeContact} />
                    <Route component={Error} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;
