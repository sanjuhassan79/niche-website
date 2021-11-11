import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const MyOrdersItem = (props) => {
    const {img,status,productName,_id}=props.order
    return (
        <Card sx={{ maxWidth: 405 ,height: 331}}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button onClick={()=>props.handleDelete(_id)} variant="outlined" color="error">Cencal</Button>
          <Button variant="contained"style={{ backgroundColor: '#5c332e'}} >{status}...</Button>
        </CardActions>
      </Card>
    );
};

export default MyOrdersItem;