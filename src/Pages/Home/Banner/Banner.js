import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex align-items-center'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="banner-title" >High Innovative Technlogy & Professional Dentists</h1>
                        <p className="sub-title">Dr. Joseph Phillips is an active member of the Academy of  General Dentistry and strives to stay up to date with the latest  in techniques and technology in the dental profession.</p>

                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;