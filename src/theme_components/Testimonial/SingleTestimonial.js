import React from 'react';

const SingleTestimonial = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="author-desc">
                <div className="desc">
                    <img 
                        src={props.quoteImage} 
                        alt={props.Title}
                        className="quote" 
                    />
                    {props.Description}
                </div>
                <div className="author-img">
                    <img 
                        src={props.authorImage} 
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className="author-part">
                <a href='#' className="name">{props.Title}</a>
                <span className="designation">{props.Designation}</span>
            </div>
        </div>
	)
}

export default SingleTestimonial