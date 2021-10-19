import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';



import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home" >
           <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;