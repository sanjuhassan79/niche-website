
import { Button } from '@mui/material';
import {
    
    Switch,
    Route,
    Link,
   
    useRouteMatch,
    
  } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../DashboardItem/Pay/Pay';
import MyOrders from '../DashboardItem/MyOrders/MyOrders';
import Review from '../DashboardItem/Review/Review';
import ManageAllOrders from '../DashboardItem/ManageAllOrders/ManageAllOrders';
import AddProduct from '../DashboardItem/AddProduct/AddProduct';
import ManageProducts from '../DashboardItem/ManageProducts/ManageProducts';
import useAuth from '../Firebase/useAuth';


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
 import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
 
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdminRoute from '../AdminRoute/AdminRoute';

const drawerWidth = 200;



function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
const {logout,admin}=useAuth()
let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Link to={`${url}`}style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}>My Orders</Link> <br />
     
      <Link to={`${url}/pay`}style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}>Orders Pay</Link> <br />
    
      <Link to={`${url}/review`}style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}>Review</Link> <br />




 { admin &&   <Box>
   
  <Link to={`${url}/makeAdmin`}style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}>Make Admin</Link> <br />
      <Link to={`${url}/manageAllOrders`}style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}>Manage All Orders</Link> <br />
      <Link to={`${url}/addProduct`}style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}>Add Product</Link> <br />
      <Link to={`${url}/manageProducts`}style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}>Manage Products</Link> <br />
   
   </Box>}
      <Button onClick={logout} style={{textDecoration:'none', color:'red',padding:'0px 28px',fontSize: '15px',
    fontweight: '400',display: 'block'}}color="inherit">Logout</Button>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      style={{backgroundColor:'#5f2e3d'}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
         
          sx={{
         
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar  />
        <Switch>
        <Route exact path={path}>
        <MyOrders />
        </Route>
        
        <Route path={`${path}/pay`}>
          <Pay />
        </Route>
        
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllOrders`}>
          <ManageAllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts />
        </AdminRoute>
      </Switch>
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;














