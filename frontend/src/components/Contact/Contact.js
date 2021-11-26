import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import './Contact.css'
const Contact = () => {
    return (
        <>
                <PageTopBanner title="Contact Us"></PageTopBanner>
                <Container className='vh-100'>
                <Row className="d-flex justify-content-center mt-5">
                    <div className='col-md-6'>
                           <Card 
                        className=" contact-card blue-bg my-5 shadow"
                    >
                        <Card.Body>
                        <Card.Title className="blue-text"> Inquiry </Card.Title>
                        <Card.Text>
                            <ListGroup className="blue-bg shadow">
                                <ListGroup.Item  className="blue-bg">Phone: 01234569098</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">website@email.com</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">Dhaka, Bangladesh</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>

                      <div className='col-md-6 my-5 shadow'>
                          <Card 
                        className="contact-card blue-bg"
                    >
                        <Card.Body>
                        <Card.Title className="blue-text"> Appointment </Card.Title>
                        <Card.Text>
                            <ListGroup className="blue-bg shadow">
                                <ListGroup.Item  className="blue-bg">Phone: 01234569098</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">website@email.com</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">Dhaka, Bangladesh</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>

                      <div className='col-md-6 my-5 shadow'>
                        
                    <Card 
                        className="contact-card blue-bg"
                    >
                        <Card.Body>
                        <Card.Title className="blue-text"> Emergency </Card.Title>
                        <Card.Text>
                            <ListGroup className="blue-bg shadow">
                                <ListGroup.Item  className="blue-bg">Phone: 01234569098</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">website@email.com</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">Dhaka, Bangladesh</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                 

                  



                    </Row>
                </Container>

                {/* <Container>
                    <Row className="d-flex flex-column justify-content-center align-items-center m-5 " >
                        
                    <Col md="11" className="shadow blue-bg p-5 border rounded">
                        <h1>Send us a message</h1>
                        <br />
                            <Form.Control size="lg" type="text" placeholder="Type Message Here..." />
                            <br />
                            <Button type="submit" className="btn btn-success w-100">Submit</Button>
                          

                    </Col>
                    </Row>
                </Container> */}
        </>
    );
};

export default Contact;