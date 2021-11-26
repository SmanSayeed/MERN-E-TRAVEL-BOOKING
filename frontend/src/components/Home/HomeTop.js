import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container,Row,Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const homeTopImg  = './images/travel.jpg';
console.log(homeTopImg);
const HomeTop = () => {
    return (
        <>
        <div  style={{
                    backgroundImage: `url(${homeTopImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: '100px 0px',
                    position: 'relative',
                overflow: 'hidden',
                     boxSizing:'border-box'
            }}>
                     <div id="color-overlay"></div>
            <Container className='main-top'>
                <Row className="home-top-row "  
                >
                <Col md={12} className="home-top-content d-flex flex-column">
  
                            <section className='top-banner-content'> 
                             
                    <p className="small-text">Welcome To <span className="orange-text">TRAVEL ZONE</span></p>
                    <h1 className="large-text">
                        FIND BEST TRAVEL PACKAGE
                    </h1>
                    <div className='w-50'>
                        <p className="blue-text small-text">
                        Get discounted travel offer from us and travel the whole world with fare plane ticket
                        </p>
                    </div>
        
                    </section>
                   
              
                   
                    <Link className="blue-bg btn btn-primary sign-up" to="/services" >Services</Link>
                </Col>
                {/* <Col md={6} className="top-img">
                    <img src={homeTopImg} className="image-fluid" ></img>
                </Col> */}
             
                </Row>
            </Container>
            </div>
        </>
    );
};

export default HomeTop;