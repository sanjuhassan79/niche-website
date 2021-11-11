
import React, { useState,useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';

const ManageProducts = () => {
const [products,setproducts]=useState([])
const [isDelete, setisDelete]=useState(null)


useEffect(() => {
    fetch('https://morning-ocean-42077.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setproducts(data))
}, [isDelete,products]);

const handleDelete=(id)=>{

    fetch(`https://morning-ocean-42077.herokuapp.com/products/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        
        if(data.acknowledged === true){
            alert('Deleted succesfully')
             setisDelete(true)
             const remainingUser= products.filter(addEvent=>addEvent._id !==id)
             setproducts(remainingUser)
           
        }else{
             setisDelete(false)  
         }
 
 
 })




}



    return (
        <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            
            
            <th>Product Name</th>
            <th>price</th>
            <th>Product Id</th>
            
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
         {products.map(product=>
         <tr key={product._id}>
         
         <td>{product.name}</td>
         <td>{product.price}</td>
         <td>{product._id}</td>
         
         
         
         <td><Button onClick={()=>handleDelete(product._id)} variant="outline-danger">Cancel</Button></td>
       </tr>
         )
         
         
         
         }
          
        </tbody>
      </Table>
    );
};

export default ManageProducts;