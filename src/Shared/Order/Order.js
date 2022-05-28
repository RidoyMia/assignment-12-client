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
    const[service,setService] = useState();
    const[services,setServices] = useState([]);
    const[quantity,setQuantity] = useState(1000);
   fetch(`https://blooming-basin-80189.herokuapp.com/available`)
   .then(res => res.json())
   .then(data => setServices(data));
//    const quantityhandler = event =>{
//        setQuantity(event.target.value);
//    }
const product = [];
   if(services){
     console.log(services)
     const single = services?.find(u => u._id === id)
   
     if(single){
          product.push(single)
     }
   }
   console.log(product[0]?.quantity)
   const submit = event =>{
       event.preventDefault()
       if(quantity > product[0]?.quantity){
           setError('not available')
       }
      
       else{
        const booking={
            userName : user?.displayName,
            email : user?.email,
            name : product[0]?.name,
            quantity : quantity,
            per_price : product[0]?.per_price,
           }
           fetch('https://blooming-basin-80189.herokuapp.com/order', {
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
    
       fetch('https://blooming-basin-80189.herokuapp.com/order',{
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
        
            
           <Row>
               <Col md="3"></Col>
               <Col md="6"> 
                  
               <div className='card-container py-5'>
                   <img height="200px" className='text-center w-100' src={product[0]?.picture} alt="" />
                    <h2 className='text-center'>{product[0]?.name}</h2>
                    <p>{product[0]?.description}</p>
                    <p>available : {product[0]?.quantity}</p>
                    { 
                     error ? error : ''
                    }
                    
            </div>
            <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                   <p>Restock</p>
                   <Form.Control  type="number" onBlur={restock} placeholder="restock" />
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
                   
                    <Form.Control  type="name" placeholder="name" value={product[0]?.name} />
                </Form.Group>
               
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control type="number" placeholder="you can order getter than 1000"  value={quantity}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                     <p>per-price</p>
                    <Form.Control type="number" placeholder="you can order getter than 1000"  value={product[0]?.per_price}  />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
               </Col>
           </Row>
            
    
    );
};

export default Order;