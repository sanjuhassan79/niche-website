
import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from "../Navigation/Navigation";
 import ShopNails from '../ShopNails/ShopNails/ShopNails';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <ShopNails></ShopNails>
          <Testimonials></Testimonials>
          <Footer></Footer>
          </div>
    );
};

export default Home;