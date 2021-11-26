import React from 'react';
import { Container } from 'react-bootstrap';
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import './NoPageFound.css'
const NoPageFound = () => {
    return (
        <>
            <PageTopBanner title="Wrong URL">

            </PageTopBanner>
            <Container className="nopage d-flex align-items-center justify-content-center">
               <img src="https://www.colorofindia.se/wp-content/uploads/2020/08/404.jpg"></img>
            </Container>
        </>
    );
};

export default NoPageFound;