import React, {useContext, createContext, useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import axios from 'axios';
import { useForm } from "react-hook-form";

import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';


// import useServices from '../../hooks/useServices';
// import PageTopBanner from '../PageTopBanner/PageTopBanner';
// import ServicesCard from '../ServicesCard/ServicesCard';

// import './ServiceDetails.css';

const ServiceDetails = () => {
  const { index } = useParams();
  const {user} = useAuth();
  const [jsonData, setJsonData] = useState([]);
  const [singleData, setSingleData] = useState({
    'title':''
  });
  let title = singleData.title;
  const {register,handleSubmit,reset } = useForm();


  useEffect(() => {

    axios.get(`services/${index}`).then(res=>{
      console.log(res.data);
      setSingleData(res.data);
      title = singleData.title;
  })

  }, [index]);

  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState('');
  const [error,setError] = useState('');

  const onSubmit = data => {
    setLoading(true);  
      console.log('---------serve-------------');
    console.log(data);
    data.service = singleData.title;
  console.log('---------serve---========------------');
    axios.post('bookings',data).then(res=>{
     
      if (res.data.insertedId) {
           console.log('----------------------');
             console.log(res);
          setMessage('Sccessfully Booked');  
          setLoading(false);  
          reset(res.data);
        }
    })
  }


  
    console.log('jsonData');    
    console.log(jsonData);

    return (
        <>
        <PageTopBanner title="Book this service"></PageTopBanner>
        <Container>

          
        <Row xs={1} md={1} className="g-4 m-5" >

              {
                singleData ? 
                
                (
                  <>
                  
                    <Col md="6" className="card-col">

                    {
                    loading && (
                    <>
                            <div className="spinner-border text-success" role="status">
                                  <span className="visually-hidden">Loading...</span>
                            </div>

                    </>)
                    
                    }

                    {
                        message && (
                        <>
                              <h1 className='alert alert-success'>{message}</h1>

                        </>)
                        
                    }

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input {...register("name",{required:true})} type="text" className="form-control" id="name" placeholder="Enter name" value={user.displayName} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input {...register("email",{required:true})} type="text" className="form-control" id="email"  placeholder="Enter email link" value={user.email} />
                          </div>
                          
                               
                        <div className="form-group">
                            <label htmlFor="title">Selected Place Name</label>
                                  
                            <input {...register("service",{required:false})} type="text" className="form-control"  value={singleData.title} id="title" />
                        </div>
                       

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input {...register("address",{required:true})} type="text" className="form-control" id="address"  placeholder="Enter address" />
                        </div>
                  
                

                        <input {...register("status",{required:true})} type="hidden" className="form-control"  value="Pending"  />
                      
                        <button type="submit" className="btn btn-primary mt-2">Book</button>
                    </div>

                </form>

                    </Col>

                      <Col md="6" className="card-col">
                      <Card className="main-card d-flex align-items-center justify-content-center">  
                            <Card.Img variant="top" src={singleData.image} className="my-5 cardimg mx-5  rounded" style={{height:'400px',width:'400px'}} />

                        <Card.Body className="d-flex align-items-center flex-column justify-content-center">
                            <Card.Title>{singleData.title}</Card.Title>
                            <Card.Text className="cardtext text-center">
                            {singleData.description}
                          
                            </Card.Text>
                        </Card.Body>
                      
                      </Card>
                      </Col>
                      </>
                    )
                      :
                      <h1>Loading...</h1>
                     
              }
          

          </Row>

          
          </Container>
        </>
    );
};

export default ServiceDetails;