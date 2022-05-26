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
    fetch('http://localhost:9000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[User])
    const ami = User?.email;
    if(ami){
    const identity = users.find(u => u.email === User?.email);
    identi.push(identity)
  
    }
    
    
  
    
    return (
        <Container>
        
            <Row>
                <Col md="4">
                    {
                        identi[0]?.role ==='admin' ? <Link className='link' to='/dashboard/users'>Users</Link> : <p>if you are admin please reaload</p>
                      
          
                    }
                    <br />
                    <Link className='link' to='/dashboard/profile'>profile</Link>
                    <Link className='link' to='/dashboard/payment'>payment</Link>
                </Col>
                <Col md="8">
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;