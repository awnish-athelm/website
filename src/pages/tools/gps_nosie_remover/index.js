import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import OffWrap from '../../../components/Layout/Header/OffWrap';
import SearchModal from '../../../components/Layout/Header/SearchModal';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import SectionTitle from '../../../components/Common/SectionTitle';
import PricingMain from '../../../components/Pricing';

import Calculator from './calculator';

// Pricing Image
import silverImg from '../../../assets/img/pricing/1.png';
import goldImg from '../../../assets/img/pricing/2.png';
import platinumImg from '../../../assets/img/pricing/3.png';

let priceList = [
    {
        label: "Silver",
        price: "19.99",
        period: "Monthly",
        cta: "Buy Now",
        icon: silverImg,
        abilities: [
            {text: "Free Tier", "value": "10,000 requests"},
            {text: "Daily Limit", "value": "1,000 requests"},
            {text: "REST Based API", "icon": "yes"},
            {text: "Support via E-mail", "icon": "no"},
            {text: "Priority Support", "icon": "no"},
        ]
    },
    {
        label: "Gold",
        price: "49.99",
        period: "Monthly",
        cta: "Buy Now",
        icon: goldImg,
        abilities: [
            {text: "Free Tier", "value": "50,000 requests"},
            {text: "Daily Limit", "value": "10,000 requests"},
            {text: "REST Based API", "icon": "yes"},
            {text: "Support via E-mail", "icon": "yes"},
            {text: "Priority Support", "icon": "no"},
        ]
    },
    {
        label: "Platinum",
        period: "For Enterprises",
        cta: "Contact Us",
        icon: platinumImg,
        abilities: [
            {text: "Free Tier", "value": "Unlimited"},
            {text: "Daily Limit", "value": "Unlimited"},
            {text: "REST Based API", "icon": "yes"},
            {text: "Support via E-mail", "icon": "yes"},
            {text: "Priority Support", "icon": "yes"},
        ]
    },
]

const PinComponent = ({color}) => <div style={{width: '4px', height: '4px', background:color, borderRadius:'4px'}}></div>;

const Main = () => {
    let [result, setResult] = useState('');
    let [data, setData] = useState('');
    let [deviceIDList, setDeviceIDList] = useState([]);
    let [isOptimizing, setOptimizing] = useState(false);
    let [calculator, setCalculator] = useState( new Calculator());

    let [deviceID, setDeviceID] = useState();
    let [accelerationLimit, setAccelerationLimit] = useState(0.1);
    let [smoothingFactor, setSmoothingFactor] = useState(7);

    let [originalJourney, setOriginalJourney] = useState();
    let [optimizedJourney, setOptimizedJourney] = useState();
    let [mapCenter, setMapCenter] = useState(null);
    let [mapZoom, setMapZoom] = useState(null);

    let processData = () => {
        calculator.setData(data);
        setDeviceIDList(calculator.deviceIDs);
        setOptimizing(true);
    }

    let reset = () => {
        setDeviceIDList([]);
        setOptimizing(false);
    }



    let optimize = () => {
        calculator.optimize((originalJourney, optimizedJourney) => {
            setOriginalJourney(originalJourney);
            setOptimizedJourney(optimizedJourney);
        }, deviceID, accelerationLimit, smoothingFactor);
    }

	return (
		<React.Fragment>
            <div className='rs-banner style3 modify1' style={{padding: '48px 0px'}}></div>
            <div className="rs-why-choose style2 gray-bg rs-rain-animate pt-120 pb-120 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 md-mb-30">
                            <SectionTitle
                                sectionClass="sec-title mb-40"
                                subtitleClass="sub-text style4-bg left"
                                subtitle="Let's Optimize"
                                titleClass="title pb-20"
                                title="Distance Calculator"
                                descClass="desc fixed-width"
                                description="Remove the noise from the captured GPS data to find the actual distance travelled. Use the tool to evaluate on your own data."
                            />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="rs-contact mod1">   
                                <main>
                                    <div className="appointment-style white-bg">
                                        { isOptimizing ? 
                                            <>
                                                <div className="form-title">
                                                    <h3 className="title">'Optimize'</h3>
                                                    <p className="desc">'Optimize with the sliders. We have selected value that suits you best'</p>
                                                    <div className='row mt-24'>
                                                        <div className='col-xl-4 col-lg-4'>
                                                            <label>Select Device ID</label>
                                                            <select placeholder='Select Device ID' onChange={e => {
                                                                setDeviceID(e.target.value);
                                                            }} value={deviceID}>
                                                                <option value={null}>--Select a Device--</option>
                                                                {deviceIDList.map(id => <option value={id}>{id}</option>)}
                                                            </select>
                                                        </div>
                                                        {deviceID && <>
                                                            <div className='col-xl-4 col-lg-4'>
                                                                <label>Adjust Param 'A'</label>
                                                                <input type="range" min="1" max="100" class="slider" step="1"  onChange={e => {
                                                                    setAccelerationLimit(e.target.value/100);
                                                                }} value={accelerationLimit*100}></input>
                                                            </div>
                                                            <div className='col-xl-4 col-lg-4'>
                                                                <label>Adjust Param 'S'</label>
                                                                <input type="range" min="3" max="20" class="slider" step="1"  onChange={e => {
                                                                    setSmoothingFactor(e.target.value);
                                                                }} value={smoothingFactor}></input>
                                                            </div>
                                                            <button type="submit" className='submit opacity-50 col-xl-5 col-lg-5 mt-24 mx-auto' onClick={optimize}>Optimize</button>
                                                        </>}
                                                        <button type="submit" className='submit col-xl-5 col-lg-5 mt-24 mx-auto' onClick={reset}>Reset</button>
                                                    </div>
                                                </div>
                                            </>
                                        :   <>
                                                <div className="form-title">
                                                    <h3 className="title">'Let's Start'</h3>
                                                    <p className="desc">'Please fill the data below'</p>
                                                </div>
                                                <textarea rows="5" type="text" name="rawData" placeholder="Captured raw data in CSV format in the format below. Do not use headers: deviceID,latitude,longitude,timestamp" className='w-100' required onChange={e => setData(e.target.value)}>{data}</textarea>
                                                <button type="submit" className='submit' onClick={processData}>Continue</button>
                                            </>
                                        }
                                        <div>{result}</div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                    { isOptimizing && <div className='row pt-48'>
                        <div className="col-xl-6 col-lg-6 md-mb-30" style={{height: '30vh'}}>
                            <h5>Original Route: {(originalJourney?.getTotalDistance()/1000).toFixed(3)} kms</h5>
                            {originalJourney && <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDEkdcfR_nVPmCE0J3s-dKOPxpb0iFC-Ro" }}
                                {...originalJourney.getCenterAndZoom()}
                                onChange={e => {
                                    setMapCenter(e.center);
                                    setMapZoom(e.zoom)
                                }}
                                center={mapCenter}
                                zoom={mapZoom}
                            >
                                {originalJourney.getPlot().map(pin => <PinComponent {...pin}/>)}
                            </GoogleMapReact>}
                        </div>
                        <div className="col-xl-6 col-lg-6 md-mb-30" style={{height: '30vh'}}>
                            <h5>Optimized Route: {(optimizedJourney?.getTotalDistance()/1000).toFixed(3)} kms</h5>
                            {optimizedJourney && <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDEkdcfR_nVPmCE0J3s-dKOPxpb0iFC-Ro" }}
                                {...optimizedJourney.getCenterAndZoom()}
                                onChange={e => {
                                    setMapCenter(e.center);
                                    setMapZoom(e.zoom)
                                }}
                                center={mapCenter}
                                zoom={mapZoom}
                            >
                                {optimizedJourney.getPlot().map(pin => <PinComponent {...pin}/>)}
                            </GoogleMapReact>}
                        </div>
                    </div>}
                </div>
                <div className="line-inner">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <PricingMain priceList={priceList}/>
        </React.Fragment>
    )
}

const GPSNoiseRemover = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify2 header-transparent'
                offCanvas='enable'
                activeMenu='/home'
            />
            <Main/>
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}


export default GPSNoiseRemover;