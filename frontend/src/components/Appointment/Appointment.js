import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PageTopBanner from '../PageTopBanner/PageTopBanner';

const Appointment = () => {
    return (
        <>
              <PageTopBanner title="Appointment"></PageTopBanner>
                <Container className='vh-100'>
                    <Row className="d-flex justify-content-center mt-5">
                    <Col md="11" className="shadow blue-bg p-5 border rounded">
                        <h1>Appointment Details Here</h1>
                        <br />
                            <Form.Control size="lg" type="text" placeholder="Type Here..." />
                            <br />
                            <Button type="submit" className="btn btn-success w-100">Submit</Button>
                          

                    </Col>
                    </Row>
                </Container>
        </>
    );
};

export default Appointment;