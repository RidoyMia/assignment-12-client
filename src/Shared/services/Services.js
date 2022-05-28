import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Service from './Service';

const Services = () => {
    const[services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://blooming-basin-80189.herokuapp.com/available')
        .then(res => res.json())
        .then(data=>setServices(data))
    },[])
   if(!services){
       return <Loading></Loading>
   }
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