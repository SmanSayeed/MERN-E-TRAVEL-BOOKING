import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PageTopBanner from '../PageTopBanner/PageTopBanner';

const Review = () => {
    return (
        <div>
             <PageTopBanner title="Customer's Review"></PageTopBanner>
             <Container className='vh-100'>
                    <Row className="d-flex justify-content-center mt-5">
                    <Col md="11" className="shadow blue-bg p-5 border rounded">
                    <p className=''>
                          <strong>Ahmed Sharif</strong>
                          :
                          Very Helpful
                      </p>
                      <p className=''>
                          <strong>Ali</strong>
                          :
                         They offered me cheapest air ticket
                      </p>

                      <p className=''>
                          <strong>Samia</strong>
                          :
                        This is best
                      </p>
                     

                    </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Review;