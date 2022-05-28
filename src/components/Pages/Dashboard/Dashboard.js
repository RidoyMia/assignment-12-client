import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
    
    const[users,setUsers]=useState([])
    const[User] = useAuthState(auth);
    
    const[identi,setIdenti] = useState([]);
  useEffect(()=>{
    fetch('https://blooming-basin-80189.herokuapp.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[User])
    const ami = User?.email;
    if(ami){
    const identity = users.find(u => u.email === User?.email);
    identi.push(identity)
    
  
    }
    //
    
    console.log(identi)
  
    
    return (
        <Container>
        
            <Row>
                <Col md="4">
                    {
                        identi[5]?.role ==='admin' ? <Link className='link' to='/dashboard/users'>Users</Link> :''
                      
          
                    }
                    <br />
                   
                    <Link className='link' to='/dashboard/payment'>My-orders</Link>
                </Col>
                <Col md="8">
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;