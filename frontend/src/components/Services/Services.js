import React, { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
   
    const [servicesData] = useServices();
    console.log('---------------------')
    console.log(servicesData);

    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        if(servicesData){
            setLoading(false);
          }
    },[])

 

  if(loading){
    return (
      <>
                           <div className="spinner-border text-success" role="status">
                                   <span className="visually-hidden">Loading...</span>
                          </div>
      </>
    )
  }


    return (
        <>
        <PageTopBanner title="Services"></PageTopBanner>
        <Container>
          <Row xs={1} md={3} className="g-4 m-5" >
              {
                     servicesData.map(data =><ServicesCard data={data} len={data.length}>

                        </ServicesCard>)
              }
      
        
          </Row>
          </Container>
        </>
    );
};

export default Services;