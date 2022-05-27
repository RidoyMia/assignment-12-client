import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../../../src/review/ami.jpg';

const Cycle = () => {
    return (
        <Container>
            <Row>
                
                <Col md="12">
                    <Container>
                        <div>
                            <img className='w-100' src={img1} alt="" />
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Cycle;