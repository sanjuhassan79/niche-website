import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)

    const handleOnBlur=(e)=>{
        setEmail(e.target.value)

    }
    const handleAddmin=e=>{
        const user={email}
fetch('https://morning-ocean-42077.herokuapp.com/users/admin',{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
if(data.modifiedCount){
    
    setSuccess(true)
    console.log(data);
}


})
e.preventDefault()
    }
    return (
        <div>
            <h1>MakeAdmin</h1>
            <form onSubmit={handleAddmin}>

            <TextField 
               sx={{width:'100%',m:2}} 
               id="standard-basic" 
               label="Your Email" 
               onBlur={handleOnBlur}
               name="email"
               type="email"
               variant="standard" />
               <Button type="submit" sx={{width:'100%',m:2}} variant="contained">Register</Button>
               
            </form>
            {success && <Alert severity="success">This is a success alert — check it out!</Alert> }
              
        </div>
    );
};

export default MakeAdmin;