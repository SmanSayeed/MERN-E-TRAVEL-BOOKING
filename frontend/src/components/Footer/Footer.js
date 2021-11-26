import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <Container fluid className="blue-bg">
                {/* <p className="text-center">&copy;Copyright {new Date().getFullYear()}</p> */}
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 blue-bg">
  
                    <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                    </div>

                    <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>

                </div>
  
            </Container>
        </>
    );
};

export default Footer;