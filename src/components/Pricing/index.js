import React from 'react';
import SinglePricing from './SinglePricing';
import SectionTitle from '../Common/SectionTitle';

const PricingMain = ({priceList}) => {
    return (
        <div className="rs-pricing style2 gray-color pt-120 pb-144 md-pt-80 md-pb-80">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-text style-bg"
                    subtitle="Pricing"
                    titleClass="title title2"
                    title="Our Pricing Plan"
                />
                <div className="row">
                    {priceList?.map(pricePoint => 
                        <div className={`col-lg-${12/priceList.length}`}>
                            <SinglePricing
                                itemClass="pricing-table"
                                badge={pricePoint.label}
                                pricingImage={pricePoint.icon}
                                currency={pricePoint.price ? "$" : ""}
                                price={pricePoint.price ? pricePoint.price : "Custom"}
                                period={pricePoint.period ? pricePoint.period : ""}
                                buttonClass="readon buy-now"
                                buttonText={pricePoint.cta ? pricePoint.cta : "Contact Us"}
                                buttonURL="/#contact-form-section"                                
                                abilities={pricePoint.abilities}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}

export default PricingMain;