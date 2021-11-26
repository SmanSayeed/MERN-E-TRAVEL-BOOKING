import React, {useContext, createContext, useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  NavLink 
} from "react-router-dom";

import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import PageTopBanner from '../../PageTopBanner/PageTopBanner';

import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

import axios from 'axios';
import { useForm } from "react-hook-form";



const ServiceCreate = () => {   

    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const [error,setError] = useState('');

    const {register,handleSubmit,reset } = useForm();
    const onSubmit=(data)=>{
    
      setLoading(true);  
      console.log(data);
      axios.post('services',data).then(res=>{
          console.log(res);
          if(res.data.insertedId){
            setMessage('Sccessfully created');  
            setLoading(false);  
            reset(res.data);
          }
      })
    }

    return (
        <>
        <PageTopBanner title="Details"></PageTopBanner>
        <Container>
          <Row  md={1} >

            <div className='col-md-12 p-5'>
                
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
                            <label htmlFor="title">Title</label>
                            <input {...register("title",{required:true})} type="text" className="form-control" id="title" placeholder="Enter title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input {...register("description",{required:true})} type="text" className="form-control" id="dscription"  placeholder="Enter description" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Image link</label>
                            <input {...register("image",{required:true})} type="text" className="form-control" id="image"  placeholder="Enter image link" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input {...register("price",{required:true})} type="number" className="form-control" id="price"  placeholder="Enter Price" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary mt-2">Create</button>
                    </div>

                </form>
            </div>
          

          </Row>

          
          </Container>
        </>
    );
};

export default ServiceCreate;