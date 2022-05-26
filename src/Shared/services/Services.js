import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const[services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:9000/available')
        .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <Container>
            <Row>
                <h2>Services</h2>
                 {
                     services.map(service => <Col md="4" className='py-3'>
                     <Service service={service}></Service>
                     </Col>)
                 }
            </Row>
        </Container>
    );
};

export default Services;