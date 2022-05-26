import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { getAuth,  signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {
  const[user] = useAuthState(auth)
    return (
            <Navbar  expand="lg">
 
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link  className='link' to='/'>Home</Link>
       
 {
   user?<Button onClick={()=>signOut(auth)}>SignOut</Button> :  <Link  className='link' to='/signin'>Signin</Link>
 }
 {
   user?<Link className='link' to='/dashboard'>Dashboard</Link> : ''
 }
      </Nav>
    </Navbar.Collapse>
 
</Navbar>
      
    );
};

export default Header;