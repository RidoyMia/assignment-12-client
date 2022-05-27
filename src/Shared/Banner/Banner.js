import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import bannerone from '../../banner/ami-removebg-preview.png'
import bannertwo from '../../banner/cyclepone-removebg-preview.png';
import bannerthree from '../../banner/cyclethree-removebg-preview.png';
import './Banner.css';

//
const Banner = () => {
    return (
        <div className='py-5'>
            <Row>
                <Col md="4">
                   <div className='banner-text'>
                    <p className='py-2'>Bicycle-sport-trek</p>
                    <h1 className='banner-header'>2022 TREK</h1>
                    <h1 className='banner-header'>MADDONE SLR</h1>
                    <p className='py-2'>The all new maddone slr the proven to be on of the faster super bikes with unpelleled ayrodyanmics unmatch right quality and unpresedenter integration</p>
                    <button className='banner-button'>BUY NOW</button>
                   </div>
                </Col>
                <Col md="8" >

                <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block  w-100"
                            src={bannerone}
                            height='400px'
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={bannertwo}
                            height='400px'
                            alt="Second slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={bannerthree}
                            height='400px'
                            alt="Third slide"
                            />
                            
                        </Carousel.Item>
                    </Carousel>


                </Col>
               
            </Row>
        </div>
    );
};

export default Banner;