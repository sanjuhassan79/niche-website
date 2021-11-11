import { Container, Grid, Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';
import './Testimonials.css'
import TestimonialsItem from './TestimonialsItem';

const Testimonials = () => {
    const [rating,setrating]=useState([])
    
    useEffect(() => {
        fetch('https://morning-ocean-42077.herokuapp.com/rating')
        .then(res=>res.json())
        .then(data=>setrating(data))
     }, []);
    return (
        <>
      
        <Container fixed>


<Typography variant="h4" component="h2"sx={{ textAlign: 'center' ,pb:5,color:'#6a2b36',textTransform:"uppercase", mt:10}}>
What Clients Say
</Typography>

<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {rating?.map((rats, index) => (
    <Grid item xs={12} sm={12} md={4} key={index}>
  <TestimonialsItem
  key={index}
  rats={rats}
  
  ></TestimonialsItem>

    </Grid>
  ))}
</Grid>
        </Container>
        </>
    );
};

export default Testimonials;