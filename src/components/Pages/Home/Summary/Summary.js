import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Summary.css';
import { faCoffee,faFlag,faPlus,faMam } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className='py-5'>
            <Container>
                <h3 className='py-3 text-center' style={{marginBottom :'50px'}}>Business summary</h3>
                <Row>
                    <Col md="4">
                        <Container>
                        <div className='text-center text-light' style={{ background: 'linear-gradient(to right, #017476 30%, #00317188 100%)',padding :'40px',borderRadius :'20px'}} >
                            <h5>Setisfy Country</h5>
                            <h1>146 <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faFlag} /></h1>
                        </div>
                        </Container>
                    </Col>
                    <Col md="4">
                        <Container>
                        <div className='text-center text-light' style={{ background: 'linear-gradient(to right, #012E76 30%, #012D2C 100%)',padding :'40px',borderRadius :'20px'}} >
                            <h5>Setisfy clients</h5>
                            <h1>1000M <FontAwesomeIcon icon={faPlus} /> </h1>
                        </div>
                        </Container>
                    </Col>
                    <Col md="4">
                        <Container>
                        <div className='text-center text-light' style={{ background: 'linear-gradient(to right, #0B0143 30%, #000F5B 100%)',padding :'40px',borderRadius :'20px'}} >
                            <h5>Running project</h5>
                            <h1>1000 <FontAwesomeIcon icon={faPlus} /> </h1>
                        </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Summary;