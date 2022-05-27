import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//footer section
const Footer = () => {
    return (
        <div className='bg-dark text-light my-5'>
            <Container>
              <div style={{padding : '100px 100px 20px 100px'}}>
                <Row>
               
                    
                    <Col md="6">
                        <h3>Contact us</h3>
                          
                              <h6>Phone : 01314791920</h6>
                              <h6>email : Ridoymia153159hero@gmail.com</h6>
                              <h6>Phone : 01314791920</h6>
                              <h6>Phone : 01314791920</h6>
                          
                    </Col>
                    
                    <Col md="4">
                    <h3>Services</h3>
                    <h6>Tyierrs</h6>
                    <h6>Form</h6>
                    <h6>Fork</h6>
                    <h6>Padell</h6>
                    <h6></h6>
                    </Col>
                    <Col md="12">
                        <p className='text-center py-5'>HrdoyAhmed@ Copyright.2022 reserved</p>
                    </Col>
                </Row>
              </div>
        </Container>
        </div>
    );
};

export default Footer;