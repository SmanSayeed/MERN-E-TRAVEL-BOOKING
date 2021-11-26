import React, { useState,useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import ServicesCard from '../ServicesCard/ServicesCard';
import HomeTop from './HomeTop';

const Home = () => {

    const [servicesData,sloading] = useServices();

    return (
        <>  
        
            <HomeTop ></HomeTop>
            <Container className="shadow common">
                <h1 className="text-center">Our Services</h1>
                <Row xs={1} md={3} className="g-4 m-5 pb-5" >
                    
                    {
                        sloading ? (
                            
                            <>
                                
                                <Col className="" md="12">
                                          <div className="spinner-border text-success" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                  </Col>
                        
                            </>
                        )
                            :
                            (
                                <>
                                   {
                     servicesData.slice(0, 6).map(data =><ServicesCard data={data} len={6} col="4"></ServicesCard>)
              }
                
                  <Col className="" md="12">
                     <Link className="btn btn-success m-5" to="/services">See More</Link>  
                  </Col>
                                </>
                        )
                    }

           
        
             </Row>
            
            </Container>

            <Container className='my-5 shadow border-radius common'>
            <Row>
                 <Col md={6}>
      
                 <h1 className='text-center'>
                    What we do
                 </h1>
                 <hr/>
             <ul className="list-group">
  <li className="list-group-item">Travel all over the world</li>
  <li className="list-group-item">Fare plane ticket</li>
  <li className="list-group-item">Hotel booking</li>
  <li className="list-group-item">Online booking</li>
  <li className="list-group-item">Tour guide</li>
</ul>

           
                 </Col>
                 <Col md={6}>
      
                    <img src="https://images.unsplash.com/photo-1621632361333-4649f0b59adc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW5lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  height="200px" width="200px" />
           
                 </Col>
                
             </Row>
         
          
            </Container>
            
            <Container className='common'>
            <Row className='my-5 shadow border-radius d-flex justify-content-around align-items-center'>
                 <Col md={12}>
                    <h1 className='text-center'>
                    Our Partners
                    </h1>
        
                   
                 </Col>
                 <Col md={3} className="mx-2 p-3">
                     <img src="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE="  height="200px" width="200px" />
                 </Col>
                 <Col md={3} className="mx-2 p-3">
                     <img src="https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355630?b=1&k=20&m=1292355630&s=170667a&w=0&h=DyKox-A8Mr_VKcy-5fWrklmxxS0R0pCwl8gr9wDg_wo=" height="200px" width="200px"  />
                 </Col>
                 <Col md={3} className="mx-2 p-3">
                     <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="200px" width="200px"  />
                 </Col>
             </Row>
            </Container>

        </>
    );
};

export default Home;