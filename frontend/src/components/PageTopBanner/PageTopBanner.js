import React from 'react';
import { Container } from 'react-bootstrap';
import './PageTopBanner.css'

const PageTopBanner = (props) => {

    const topBanner = './images/top-banner.jpg';
    const bgImg = {
        backgroundImage:`url('${topBanner}') `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
        <div fluid className="page-top w-100" style={bgImg}>
            <h1 className="text-center">{props.title}</h1>
        </div>
     
        </>
    );
};

export default PageTopBanner;