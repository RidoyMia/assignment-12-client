import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const{_id,balance,picture,name,description,quantity} = props.service;
    const navigate = useNavigate()
    const ordernow = id =>{
        navigate(`/order/${id}`)
    }
    return (
        
            <div className='card-container'>
                   <img height="200px" className='text-center w-100' src={picture} alt="" />
                    <h2 className='text-center'>{name}</h2>
                    <p>{description.slice(0,90)}....</p>
                    <p>available : {quantity}</p>
                    <button className='banner-button' onClick={()=>ordernow(_id)}>Order now</button>
            </div>
        
    );
};

export default Service;