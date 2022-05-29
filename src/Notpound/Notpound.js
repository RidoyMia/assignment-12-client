import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../review/lady.jpg';

const Notpound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="12">
                        <h1 className='text-center text-warning py-5'>Page not poundt</h1>
                     <img src={img1} alt="" className='w-100' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Notpound;