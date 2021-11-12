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

import { Divider, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';





const Navigation = () => {
  const {user,logout}=useAuth()
const theme=useTheme()
  const useStyke=makeStyles({

    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:'none !important'
      }
    },
    navItemContainner:{
      [theme.breakpoints.down('sm')]: {
        display:'none !important'
      }

    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
       textAlign:'right'
      }
    },
    itemAlien:{
      display: 'flex',
      flexDirection: 'column',
      
    }



  })
  const{navIcon,navItemContainner,navLogo,itemAlien}= useStyke()


  const [state, setState] = React.useState(false);


  const list =  (
    <Box
      sx={{ width:250}}
      role="presentation"
    >
      <List>
       
          <ListItem button className={itemAlien}>
          
            
            <Link to='/Home'style={{textDecoration:'none', color:'#6a2b36',padding:'0px 28px',fontSize: '15px',textTransform:'uppercase',
    fontweight: '400',display: 'block',marginTop:'2rem'}}>Home</Link>
       
            
            <br />
            <Divider/>
            
            <Link to='/Contact'style={{textDecoration:'none', color:'#6a2b36',padding:'0px 28px',fontSize: '15px',textTransform:'uppercase',
    fontweight: '400',display: 'block'}}>Contact</Link>
        
          
            <Divider/>
            <br />
            <Link to='/Explore'style={{textDecoration:'none', color:'#6a2b36',padding:'0px 28px',fontSize: '15px',textTransform:'uppercase',
    fontweight: '400',display: 'block'}}>Explore</Link>
        
          
            <Divider/>
            <br />
           
            <Link to='/Register'style={{textDecoration:'none', color:'#6a2b36',padding:'0px 28px',fontSize: '15px',textTransform:'uppercase',
    fontweight: '400',display: 'block'}}>Register</Link>
        
           

            <Divider/>
            <br />




            {user.email ?
         <>

            <Link to='/Dashboard'style={{textDecoration:'none', color:'#6a2b36',padding:'0px 28px',fontSize: '15px',textTransform:'uppercase',
    fontweight: '400',display: 'block'}}>Dashboard</Link>
           
            <Divider/>
            
            <Button onClick={logout} style={{textDecoration:'none', color:'#6a2b36',fontSize: '15px'}} color="inherit">Logout</Button>
            
            <Divider/>
         </>
          
          :
          
          <NavLink style={{textDecoration:'none', color:'#6a2b36',fontSize: '15px'}} to='/Login'><Button color="inherit">Login</Button></NavLink>
          
          
        }


          </ListItem>
        
      </List>
     
    </Box>
  );

      
    return (
        
    <>
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" style={{backgroundColor: '#6a2b36'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          className={navIcon}
          onClick={()=>setState(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
        nellie
        </Typography>
        <Box className={navItemContainner}>

        <Link to='/Home'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Home</Button></Link>
        
        <Link to='/Explore'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Explore</Button></Link>
        
        <Link to='/Contact'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Contact</Button></Link>
        
        
        <Link to='/Register'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Register</Button></Link>
        
        
        
         {user.email ?
         <>
            <Link to='/Dashboard'style={{textDecoration:'none', color:'white'}}><Button color="inherit">Dashboard</Button></Link>
            <Button onClick={logout} style={{textDecoration:'none', color:'white'}} color="inherit">Logout</Button>
         </>
          
          :
          <NavLink style={{textDecoration:'none', color:'white'}} to='/Login'><Button color="inherit">Login</Button></NavLink>
        }
         
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
    
  <div>
     
        <React.Fragment>
         
          <Drawer
           
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
     
    </div>





    
    </>
    );
};

export default Navigation;