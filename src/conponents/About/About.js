
import { Grid,Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Navigation from '../Navigation/Navigation';

import Footer from '../Footer/Footer';

import Makeup from '../Makeup/Makeup';
import Greatlooks from '../Greatlooks/Greatlooks';
import Testimonials from '../Testimonials/Testimonials';
const About = () => {


    const useStyke=makeStyles({
        Home__about__img:{
            backgroundImage: 'linear-gradient(to right, #6a2b36 , rgba(150, 60, 75, 0.438)),url(https://st2.depositphotos.com/6903990/10673/i/600/depositphotos_106732720-stock-photo-female-model-with-golden-make.jpg)',
            height: '50vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        Home__about:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           
        },
        Home__about__com:{
            margin:'4rem 0'
        },
        Home__about__Title:{
            fontSize: '30px',
               color:'white',
               textTransform:'uppercase'

            
        },
        Home__about__Title4:{
            fontSize: '35px',
            letterSpacing: '2px',
               color:'#6a2b36',
               textTransform:'uppercase',
               margin:' 0 0 15px',
                   lineHeight: '1.2',
                   fontWeight: '300'
        },
       
        
        
    })
    const{Home__about,Home__about__com,Home__about__img,Home__about__Title,Home__about__Title4}= useStyke()
  
    return (
        
        <>
        <Navigation></Navigation>
        <div className={Home__about__img }>
        <h4 className={Home__about__Title}>About us</h4>
        </div>
        <Container className={Home__about__com}>
        <Grid  className={Home__about}
        sx={{ mx: 5 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={6}>

<div>
<h3 className={Home__about__Title4}>Beauty in the nali of the...</h3>
<p>Female hand holds a sheet of paper and demonstrates a nude manicure. Pink, beige background with place for text.Find the perfect Nail Polish Woman stock photos and editorial news pictures from Getty Images. Select from 88071 premium Nail Polish Woman of the highest </p>

</div>



    
  </Grid>
  <Grid item xs={12} md={6}>
  <img className='img-fluid' src="https://previews.123rf.com/images/subbotina/subbotina1412/subbotina141200122/34792159-beauty-girl-portrait-with-vivid-makeup-and-colorful-nail-polish.jpg" alt="" />
  </Grid>
 
        </Grid>
        </Container>

        <Greatlooks></Greatlooks>
        <Testimonials></Testimonials>
        <Makeup></Makeup>
<Footer></Footer>
        </>
    );
};

export default About;