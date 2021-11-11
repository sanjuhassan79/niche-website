import { Grid } from '@mui/material';
import React, { useState,useEffect } from 'react';
import useAuth from '../../Firebase/useAuth';
import MyOrdersItem from './MyOrdersItem';

const MyOrders = () => {
    const{user}=useAuth()
    const[order,setOrder]=useState([])
    const [isDelete, setisDelete]=useState(null)
   useEffect(() => {
    fetch(`https://morning-ocean-42077.herokuapp.com/productsale/${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        
     
        setOrder(data)
 console.log(data);
 
 })
   }, [user.email,isDelete]);

const handleDelete=(id)=>{

    fetch(`https://morning-ocean-42077.herokuapp.com/productsale/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        
        if(data.acknowledged === true){
            alert('Deleted succesfully')
             setisDelete(true)
             const remainingUser= order.filter(addEvent=>addEvent._id !==id)
             setOrder(remainingUser)
           
        }else{
             setisDelete(false)  
         }
 
 
 })




}
    
    return (
        <Grid container spacing={{ xs: 1, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }} >
  {order.map((order, index) => (
    <Grid sx={{ mt: 6 }} item xs={12} sm={12} md={4} key={index}>
      <MyOrdersItem
      order={order}
      handleDelete={handleDelete}
      ></MyOrdersItem>
    </Grid>
  ))}
</Grid>
    );
};

export default MyOrders;