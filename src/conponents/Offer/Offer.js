import React from 'react';

import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const Offer = () => {
    
  const useStyke=makeStyles({

    bg__imge:{
        backgroundImage: 'linear-gradient(to right, #6a2b36 , rgba(150, 60, 75, 0.438)),url(https://img.freepik.com/free-photo/beautiful-woman-with-perfect-make-up-manicure-wearing-jewellery_106029-54.jpg?size=626&ext=jpg)',
        height: '67vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title__bg__wal:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#6a2b36'
    },
    item__bg :{
        border:' 1px dashed #ffffff',
        padding: '3rem 2rem',
    },
    title__bg:{ 
        padding: '3rem',
        textAlign:'center'

},
    item__bg1:{
letterSpacing:'5px',
fontSize:'24px',
marginBottom:'10px',
color:'#ffffff'
    },
    item__bg2:{
letterSpacing:'5px',
fontSize:'50px',
marginBottom:'10px',
color:'#ffffff'
    },
    item__bg3:{
letterSpacing:'5px',
fontSize:'20px',
marginBottom:'10px',
color:'#ffffff'
    },
    
    // navLogo:{
    //   [theme.breakpoints.down('sm')]: {
    //    textAlign:'right'
    //   }
    // }



  })
  const{bg__imge,item__bg,item__bg1,item__bg2,item__bg3,title__bg__wal,title__bg}= useStyke()
    return (
        <div>
            <Grid container sx={{ m: 15 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid className={bg__imge} item xs={12} md={6}>
   <div className={item__bg}>
<h6 className={item__bg1}>Get The Best</h6>
<h2 className={item__bg2}>30% Offer</h2>
<h5 className={item__bg3}>On Products</h5>
   </div>
  </Grid>
  <Grid className={title__bg__wal} item xs={12} md={6}>
   <div className={title__bg}>
<h6 className={item__bg1}>Smooth nail polish like satin</h6>
<h2 className={item__bg2}> all shades significant</h2>
<p>This type of nail polish is a clear, milky-colored, or opaque pink polish formula that is used specifically before applying nail polish to the nail.[12] Its purpose is to strengthen nails,</p>
   </div>
  </Grid>
  
</Grid>
        </div>
    );
};

export default Offer;