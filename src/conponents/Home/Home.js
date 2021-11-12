
import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Makeup from '../Makeup/Makeup';
import Navigation from "../Navigation/Navigation";
import Offer from '../Offer/Offer';
 import ShopNails from '../ShopNails/ShopNails/ShopNails';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <ShopNails></ShopNails>
          <Offer></Offer>
          <Testimonials></Testimonials>
          <Makeup></Makeup>
          <Footer></Footer>
          </div>
    );
};

export default Home;