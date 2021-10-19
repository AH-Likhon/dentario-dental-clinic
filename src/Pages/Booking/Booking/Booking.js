import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {id,details}=useParams()
    return (
        <div>
            <br />
            <br />
            <h2>{details}</h2>
        </div>
    );
};

export default Booking;