import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Firebase/useAuth';



const Navigation = () => {
  const {user,logout}=useAuth()
    return (
        
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" style={{backgroundColor: '#6a2b36'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        nellie
        </Typography>
        <Link to='/Home'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Home</Button></Link>
        
        <Link to='/Explore'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Explore</Button></Link>
        
        
        <Link to='/Register'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Register</Button></Link>
        
        
        
         {user.email ?
         <Box>
            <Link to='/Dashboard'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Dashboard</Button></Link>
            <Button onClick={logout} style={{textDecoration:'none', color:'white'}} color="inherit">Logout</Button>
         </Box>
          
          :
          <NavLink style={{textDecoration:'none', color:'white'}} to='/Login'><Button color="inherit">Login</Button></NavLink>
        }
         
      </Toolbar>
    </AppBar>
  </Box>
    );
};

export default Navigation;