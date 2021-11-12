import { Grid, Typography } from '@mui/material';
import React from 'react';
import './Makeup.css'

const Makeup = () => {
    return (
        <div>
            <Typography variant="h4" component="h2"sx={{ textAlign: 'center' ,pb:5,color:'#6a2b36',textTransform:"uppercase", mt:10}}>
            Shale your nail according to your makeup</Typography>
            <Grid container spacing={2}>
  
  <Grid item xs={12} md={4}>
  <figure className="snip1321"><img src="https://cdn.shopify.com/s/files/1/0462/3361/6544/files/3_1000X.jpg?v=1611318566" alt="sq-sample26"/>
  <figcaption><i className="ion-upload"></i>
    <h4>Long Lasting Shine</h4>
    
  </figcaption>
</figure>
  </Grid>
  <Grid item xs={12} md={4}>
  <figure className="snip1321"><img src="https://cdn.shopify.com/s/files/1/0462/3361/6544/files/img-2_1000X.jpg?v=1597817876" alt="sq-sample26"/>
  <figcaption><i className="ion-upload"></i>
    <h4>Natural Nail Colors</h4>
    
  </figcaption>
</figure>
  </Grid>
  <Grid item xs={12} md={4}>
  <figure className="snip1321"><img src="https://cdn.shopify.com/s/files/1/0462/3361/6544/files/1_1000X.jpg?v=1611318580" alt="sq-sample26"/>
  <figcaption><i className="ion-upload"></i>
    <h4>Bright & Transparent</h4>
   
  </figcaption>
</figure>
  </Grid>
 
</Grid>
        </div>
    );
};

export default Makeup;