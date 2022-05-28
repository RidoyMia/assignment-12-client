import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Payment = () => {
    const[user] = useAuthState(auth)
    const[order,setOrder] = useState([]);
    useEffect(()=>{
        fetch(`https://blooming-basin-80189.herokuapp.com/order/${user?.email}`)
        .then(res =>res.json())
        .then(data => setOrder(data))
    },[user])
    console.log(order,user)

    return (
        <div>
            <Container>
            <p>order :{order?.length}</p>
             <Row>
                 <Col md="1"></Col>
                 <Col md="10">
                     <ul>
                         
                        {
                            order?.map(u => <li style={{listStyle : 'none'}}><p>Product-name :{u?.name} , product-quantity {u?.quantity}</p></li>)
                        }
                     </ul>
                 </Col>
             </Row>
            </Container>
        </div>
    );
};

export default Payment;