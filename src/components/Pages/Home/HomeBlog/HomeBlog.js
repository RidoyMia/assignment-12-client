import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../../../src/review/lady.jpg';

const HomeBlog = () => {
    return (
        <Container className='py-5'>
            <Row>
                <Col md="6">
                   <Container>
                   <img className='w-100' src={img1} alt="" />
                   </Container>
                </Col>
                <Col md="6">
                   <Container>
                   <h2 className='py-3'>Innovating to reimagine <br /> riding bicycle</h2>
                   <p>Phasellus eget condimentum nibh. Nunc id enim id velit commodo efficitur. Duis auctor, mauris in maximus cursus, purus neque ultricies velit</p>
                   <br />
                   <p>Vivamus a turpis nisi. Fusce feugiat feugiat congue in mauris id sollicitudin.</p>
                   <button className='banner-button'>BUY NOW</button>
                   </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeBlog;