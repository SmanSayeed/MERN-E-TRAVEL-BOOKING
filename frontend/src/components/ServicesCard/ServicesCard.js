import Button from '@restart/ui/esm/Button';
import React,{useState} from 'react';
import { Container,Row,Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = (props) => {

    const {data,len,col} = props;
    const {_id,title,image,description,price} = data;
    console.log('card');
    console.log(data);

  

    return (
        <>
      
    <Col md={col} className="card-col">
      <Card className="main-card  ">
            <Card.Img variant="top" src={image} className="cardimg m-auto  rounded" />

        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="cardtext">
             {description}

            </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p className='badge bg-success'>Price: {price}</p>
          <Link className="btn btn-primary w-100" to={`/details/${_id}`} > Book Now </Link>
        </Card.Footer>
      </Card>
    </Col>


        </>
    );
};

export default ServicesCard;