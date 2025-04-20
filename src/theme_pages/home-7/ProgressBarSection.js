import React from 'react';
import CircleProgressBar from '../../theme_components/CircleProgressBar';
import variables from '../../assets/scss/_variables.scss'

const ProgressBar = () => {
    return (
        <div className="progress-pie-part pb-110 md-pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 md-pb-40">
                        {/* ProgressBar-start */}
                        <CircleProgressBar 
                            progress={70}
                            circleSize={175}
                            progressBorderWidth={10}
                            progressBg='#eeeeee'
                            progressColor={variables.primaryColor}
                            circleBg='transparent'
                            progressTitle='Satisfied Clients'
                        />
                        {/* ProgressBar-end */}
                    </div>
                    <div className="col-lg-3 md-pb-40">
                        {/* ProgressBar-start */}
                        <CircleProgressBar 
                            progress={80}
                            circleSize={175}
                            progressBorderWidth={10}
                            progressBg='#eeeeee'
                            progressColor={variables.primaryColor}
                            circleBg='transparent'
                            progressTitle='Success of Works'
                        />
                        {/* ProgressBar-end */}
                    </div>
                    <div className="col-lg-3 md-pb-40">
                        {/* ProgressBar-start */}
                        <CircleProgressBar 
                            progress={76}
                            circleSize={175}
                            progressBorderWidth={10}
                            progressBg='#eeeeee'
                            progressColor={variables.primaryColor}
                            circleBg='transparent'
                            progressTitle='Works on Hand'
                        />
                        {/* ProgressBar-end */}
                    </div>
                    <div className="col-lg-3 md-pb-40">
                        {/* ProgressBar-start */}
                        <CircleProgressBar 
                            progress={88}
                            circleSize={175}
                            progressBorderWidth={10}
                            progressBg='#eeeeee'
                            progressColor={variables.primaryColor}
                            circleBg='transparent'
                            progressTitle='Expert Team Member'
                        />
                        {/* ProgressBar-end */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;