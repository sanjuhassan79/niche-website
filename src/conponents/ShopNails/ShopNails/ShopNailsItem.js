import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const ShopNailsItem = (props) => {
  const {description,img,name,price,_id}=props.product
    return (
        <Card sx={{ maxWidth: 308,my:3}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description.slice(1,100)}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
      <Link to={`/productDetail/${_id}`}style={{textTransform:'uppercase',textDecoration:'none',}}><Button type="button" className="btn btn-outline-info hover-5-title m-3 mt-3" style={{backgroundColor:"rgb(217 79 121)",color:'rgb(255 255 255)'}}>SHOP NOW</Button></Link>
         
        </CardActions> 
      </Card>
    );
};

export default ShopNailsItem;