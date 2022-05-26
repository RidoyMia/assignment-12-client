import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    
    const[user] = useAuthState(auth)
    const {id} = useParams();
   const[error,setError] = useState('');
   const[restockk,setRestock] = useState(0)
    const[service,setService] = useState({});
    const[services,setServices] = useState([]);
    const[quantity,setQuantity] = useState(1000);
   fetch(`http://localhost:9000/service/${id}`)
   .then(res => res.json())
   .then(data => setService(data));
   const quantityhandler = event =>{
       setQuantity(event.target.value);
   }
   const submit = event =>{
       event.preventDefault()
       if(quantity > service.quantity){
           setError('not available')
       }
      
       else{
        const booking={
            userName : user?.displayName,
            email : user?.email,
            name : service?.name,
            quantity : quantity,
           }
           fetch('http://localhost:9000/order', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    });
    
       fetch('http://localhost:9000/order',{
           method : 'PUT',
           headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(booking),
       })
       .then(res => res.json())
       .then(data => console.log(data))
       }

   }
   const restock = event =>{
     setRestock(event.target.value);
   }
   const update = event =>{
       const ager = parseInt(quantity);
       const ekn = parseInt(restockk)
      setQuantity(ager + ekn)
      
   }
    

  
    return (
        <div>
           <Row>
               <Col md="3"></Col>
               <Col md="6">
                  
               <div className='card-container py-5'>
                   <img height="200px" className='text-center w-100' src={service.picture} alt="" />
                    <h2 className='text-center'>{service.name}</h2>
                    <p>{service.description}</p>
                    <p>available : {service.quantity}</p>
                    { 
                     error ? error : ''
                    }
                    
            </div>
            <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                   
                   <Form.Control  type="number" onBlur={restock} />
                   <button onClick={update}>update</button>
                  
            </Form.Group>
            <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                   
                   <Form.Control  type="name" placeholder="Enter email" value={user.displayName} />
                  
               </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                   
                    <Form.Control  type="email" placeholder="Enter email" value={user.email} />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control  type="name" placeholder="name" value={service.name} />
                </Form.Group>
               
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control type="number" placeholder="you can order getter than 1000"  value={quantity}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control type="number" placeholder="you can order getter than 1000"  value={quantity * 1000}  />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
               </Col>
           </Row>
            
        </div>
    );
};

export default Order;