import { Container, Grid, Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';

import ShopNailsItem from './ShopNailsItem';

const ShopNails = () => {
    const [product,setProduct]=useState([])
    
useEffect(() => {
    fetch('https://morning-ocean-42077.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProduct(data))
 }, []);

 console.log(product);
    return (
        <>
      
        <Container fixed >

<Typography variant="h6" component="h2"sx={{ textAlign: 'center',py:2,fontWeight: 'light',mt:7 }}>
SEE ALL COLORS
</Typography>
<Typography variant="h3" component="h2"sx={{ textAlign: 'center' ,pb:5,color:'#6a2b36',textTransform:"uppercase", mt:3}}>
Beauty at pocket friendly price!
</Typography>

<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {product?.slice(1,7).map((product, index) => (
    <Grid item xs={12} sm={12} md={4} key={index}>
  <ShopNailsItem
  key={index}
  product={product}
  
  ></ShopNailsItem>

    </Grid>
  ))}
</Grid>
        </Container>
        </>
    );
};

export default ShopNails;