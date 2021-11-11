import { Alert, Button, Container, Grid } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Navigation/Navigation';
import ProductModal from '../ProductModal/ProductModal';
import './ProductDetail.css'
const ProductDetail = () => {
const {Productid}=useParams()
    const [products,setProducts]=useState({})
    const [open, setOpen] = useState(false);
    const [ProductSuccess, setProductSuccess] = useState(false);
    const handleProductOpen = () => setOpen(true);
    const handleProductClose  = () => setOpen(false);
    useEffect(() => {
       fetch(`https://morning-ocean-42077.herokuapp.com/products/${Productid}`)
       .then(res=>res.json())
       .then(data=>setProducts(data))
    }, [Productid]);
    return (
        <>
          <Navigation></Navigation>
        <div>
            <div className="Product__home">
                <img src={products.img} alt="" />
                <h4>{products.name}</h4>
            </div>
            <Container fixed sx={{ mt: 15 }}>
            <Grid container spacing={3}>
                
                <Grid item xs={12} md={5}>
                <img src={products.img} alt="" />
                </Grid>
                <Grid item xs={12} md={7}>
                <h4 className="title__p">{products.name}</h4>
                <h6 className="title__pri">$ {products.price}</h6>
                <p className="title__des">{products.description}</p>
                {ProductSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
                <Button onClick={handleProductOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Grid>
                </Grid>

        

            </Container>
            <ProductModal
                products={products}
                openProduct={open}
                handleProductClose={handleProductClose}
                setProductSuccess={setProductSuccess}
            ></ProductModal>
            </div>
        </>
    );
};

export default ProductDetail;