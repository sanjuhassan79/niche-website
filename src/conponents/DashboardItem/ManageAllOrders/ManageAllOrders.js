import React, { useState,useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';

const ManageAllOrders = () => {
const [costomer,setcostomer]=useState([])
const [isDelete, setisDelete]=useState(null)


useEffect(() => {
    fetch('https://morning-ocean-42077.herokuapp.com/productsale')
    .then(res=>res.json())
    .then(data=>setcostomer(data))
}, [isDelete,costomer]);

const handleDelete=(id)=>{

    fetch(`https://morning-ocean-42077.herokuapp.com/productsale/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        
        if(data.acknowledged === true){
            alert('Deleted succesfully')
             setisDelete(true)
             const remainingUser= costomer.filter(addEvent=>addEvent._id !==id)
             setcostomer(remainingUser)
           
        }else{
             setisDelete(false)  
         }
 
 
 })




}

const handleStatus=(id)=>{
   
    fetch(`https://morning-ocean-42077.herokuapp.com/productsale/${id}`,{
    
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(
       {
    status:"shipped"
   }
    
    )
    })
    
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    
    
    
    }

    return (
        <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
         {costomer.map(costomer=>
         <tr key={costomer._id}>
         
         <td>{costomer.CustomerName}</td>
         <td>{costomer.productName}</td>
         <td>{costomer.email}</td>
         <td>{costomer.phone}</td>
         
         <td>
        
         {/* <select value={this.value} onClick={()=>handleStatus(costomer._id)}>
            <option value="pending">pending</option>
            <option value="approved">approved</option>
            <option value="shipped">shipped</option>
            
        </select > */}
             
             <Button onClick={()=>handleStatus(costomer._id)} variant="outline-danger">{costomer.status}</Button> 
         
         
         
         </td>
         <td><Button onClick={()=>handleDelete(costomer._id)} variant="outline-danger">Cancel</Button></td>
       </tr>
         )
         
         
         
         }
          
        </tbody>
      </Table>
    );
};

export default ManageAllOrders;