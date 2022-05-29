import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const Portfulio = () => {
    return (
        <div>
            <Container>
                <Row className='py-5'>
                    <Col md="6">
                       <h2>About me</h2>
                       <p>Hellow My name is <span className='text-success'>Hridoy ahmed</span>  and my email is <span className='text-success'>Ridoymia153159hero@gmail.com</span>I am a MERN stack web developer from Sherpur, Bangladesh. I work as a freelance web developer for clients across the globe with great product delivery. I also worked with Edumonk Foundation and Inception Wave Pvt. Ltd as a Software Developer intern and am looking for opportunities to further develop my skills.</p><br />
                       <p>Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of Data Structures and Algorithms with great problem-solving capabilities.</p><br />
                       <p>I can vouch for the fact that I am a fast learner with a penchant to both learn and unlearn; That is learning the latest relevant technologies and skills. I also bring with me some fresh ideas and I am confident you will find many of them to be quite useful and innovative.</p>
                       <h2>My skills</h2>
                       <div>
                           <h6>html</h6>
  <ProgressBar striped variant="success" now={100} />
  <h6>css</h6>
  <ProgressBar striped variant="info" now={90} />
  <h6>bootstrap</h6>
  <ProgressBar striped variant="warning" now={90} />
  <h6>Javascript</h6>
  <ProgressBar striped variant="danger" now={860} />
  <h6>react js</h6>
  <ProgressBar striped variant="danger" now={80} />
  <h6>express js</h6>
  <ProgressBar striped variant="danger" now={70} />
  <h6>node JS</h6>
  <ProgressBar striped variant="danger" now={80} />
  <h6>Mongo db</h6>
  <ProgressBar striped variant="danger" now={760} />
  
</div>
                    </Col>
                    <Col md="6">
                        <h2>My project</h2>
                        <h4>site one <a href="https://trainer-hridoy.netlify.app/" style={{textDecuration : 'none'}}>site one </a> </h4>
                        <h4>site one <a href="https://chipper-blancmange-7b261f.netlify.app/" style={{textDecuration : 'none'}}>site two </a> </h4>
                        <h4>site one <a href="https://furniture80.netlify.app/" style={{textDecuration : 'none'}}>site three </a> </h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfulio;