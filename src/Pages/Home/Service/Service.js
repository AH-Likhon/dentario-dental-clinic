import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // const {service} = props;
    const { name,details, description, img } = service;
    return (
        <div className="service pb-3">
            <img className="img-style img-fluid " src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${details}`}>
            <button className="btn btn-warning" >Book {name.toUpperCase()}</button>
            </Link>          
        </div>
    );
};

export default Service;