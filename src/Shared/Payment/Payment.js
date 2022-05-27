import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Payment = () => {
    const[user] = useAuthState(auth)
    const[order,setOrder] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:9000/order/${user?.email}`)
        .then(res =>res.json())
        .then(data => setOrder(data))
    },[user])
    console.log(order)

    return (
        <div>
            <Container>
            <p>order :{order?.length}</p>
             <Row>
                 <Col md="4"></Col>
                 <Col md="4">
                     <ul>
                         <h2>orders name</h2>
                        {
                            order?.map(u => <li style={{listStyle : 'none'}}><p>{u.name}</p></li>)
                        }
                     </ul>
                 </Col>
             </Row>
            </Container>
        </div>
    );
};

export default Payment;