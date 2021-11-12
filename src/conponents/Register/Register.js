
import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


import { NavLink,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../Firebase/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history=useHistory()
    const location=useLocation()

    const {registerUser,user,authError,isLoading,signInWithGoogle}=useAuth()
console.log(registerUser);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
  console.log(loginData);
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name,history,location);
         e.preventDefault();
    }

    const handleGoogle=()=>{
        signInWithGoogle(history,location)

    }

    return (
        <Container>

            <Grid container >
                <Grid item xs={12} md={12} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <Paper  elevation={3} sx={{width:'100%',mt:10,p:1}} > 
               
                <Typography variant="h5" gutterBottom>
                Create an account
      
               </Typography>
         {!isLoading &&  
              
              <form  onSubmit={handleLoginSubmit}>
               <TextField 
               sx={{width:'75%',m:2}} 
               id="standard-basic" 
               label="Your Name" 
               onBlur={handleOnBlur}
               name="name"
               variant="standard" />
               <TextField 
               sx={{width:'75%',m:2}} 
               id="standard-basic" 
               label="Your Email" 
               onBlur={handleOnBlur}
               name="email"
               type="email"
               variant="standard" />
                 <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Confrim password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
               
               <Button type="submit" sx={{width:'75%',m:2}} style={{backgroundColor:'#6a2b36'}} variant="contained">Register</Button>
               <br />
               <Button onClick={handleGoogle} sx={{width:'75%',m:2}} style={{backgroundColor:'#6a2b36'}}variant="contained">Continue with Google</Button>
               <br />
               <NavLink 
               style={{textDecoration:'none'}}
               to='/Login'
               ><Button variant="text">Already Registered? please Login</Button></NavLink>
               </form>
              
               }
             {isLoading && <CircularProgress />}
               {user?.email && <Alert severity="success">Your Registration Ss Successfully</Alert> }
               {authError && <Alert severity="error">{authError}</Alert>} 
 

              </Paper> 
               
                </Grid>
              
            </Grid>
            
        </Container>
    );
};

export default Register;