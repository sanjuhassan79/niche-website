import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import useAuth from '../Firebase/useAuth';
import { Fade, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ProductModal = ({ products, handleProductClose, openProduct,setProductSuccess }) => {
    const { name, price,img } = products;
    const { user } = useAuth();
    const initialInfo = { CustomerName: user.displayName, email: user.email, phone: '' }
    const [ProductInfo, setProductInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...ProductInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);
    }

    const handleProductSubmit = e => {
        // collect data
        // const img= user.img
        const appointment = {
            ...ProductInfo,
            img,
             status: 'pending'
        }
        // send to the server
        fetch('https://morning-ocean-42077.herokuapp.com/productsale', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setProductSuccess(true);
                    handleProductClose();
                }
            });

        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openProduct}
        onClose={handleProductClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
        <Fade in={openProduct}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleProductSubmit}>
                <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="productName"
                        onBlur={handleOnBlur}
                        defaultValue={name}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={price}
                        size="small"
                    />
                  
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="CustomerName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue="Phone Number"
                        size="small"
                    />
                   
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
        </Fade>
    </Modal>
    )
};

export default ProductModal;