
import { Container, Grid, Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ExploreItem from './ExploreItem';


const Explore = () => {
    const [product,setProduct]=useState([])
    
useEffect(() => {
    fetch('https://morning-ocean-42077.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProduct(data))
 }, []);

 console.log(product);
    return (
        <>
      <Navigation></Navigation>
        <Container fixed>

<Typography variant="h6" component="h2"sx={{ textAlign: 'center',py:2,fontWeight: 'light' }}>
SEE ALL COLORS
</Typography>
<Typography variant="h3" component="h2"sx={{ textAlign: 'center' ,pb:5}}>
Beauty at pocket friendly price!
</Typography>

<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {product?.map((product, index) => (
    <Grid item xs={12} sm={12} md={4} key={index}>
  <ExploreItem
  key={index}
  product={product}
  
  ></ExploreItem>

    </Grid>
  ))}
</Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Explore;