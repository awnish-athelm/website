import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePricing = (props) => {
    const { itemClass, badgeClass, buttonURL } = props;
	return(
        <div className={itemClass ? itemClass : 'pricing-table'}>
            <div className={badgeClass ? badgeClass : 'pricing-badge'}>{props.badge}</div>
            <div className="pricing-icon">
                <img
                    src={props.pricingImage}
                    alt={props.period}
                />
            </div>
            <div className="pricing-table-price">
                <div className="pricing-table-bags">
                    <span className="pricing-currency">{props.currency}</span>
                    <span className="table-price-text">{props.price}</span>
                    <span className="table-period">{props.period}</span>
                </div>
            </div>
            <div className="pricing-table-body">
                <ul>
                    {props.abilities?.map(ability => <li className={ability.icon}>
                        <div class="d-flex justify-content-between">
                            <div>{ability.text}</div>
                            <div>{ability.value}</div>
                        </div>
                    </li>)}
                </ul>
            </div>
            <div className="btn-part">
                <Link to={buttonURL ? buttonURL : '#'} className={props.buttonClass}>{props.buttonText}</Link>
            </div>
        </div>
	)
}

export default SinglePricing