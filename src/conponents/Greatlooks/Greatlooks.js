

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';


import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CompareIcon from '@mui/icons-material/Compare';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Greatlooks = () => {


    const useStyke=makeStyles({
        Great__about__img:{
            backgroundImage: 'linear-gradient(to right, #260e12c2 , rgb(37 13 17 / 95%)),url(https://st2.depositphotos.com/2422217/8023/i/600/depositphotos_80235688-stock-photo-female-face-with-purple-manicure.jpg)',
            
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
    margin:' 0 auto',

        },
       
        Home__Greate__Title4:{
            fontSize: '35px',
            letterSpacing: '2px',
               color:'#e6e6e6',
               textTransform:'uppercase',
               margin:' 0 0 15px',
                   lineHeight: '1.2',
                   fontWeight: '300',
                   padding:'0 2rem'
        },
        Home__Greate__Titlep:{
            
               color:'#e6e6e6',
               padding:'0 2rem'
        },
        icon_wrapper:{

                 padding: '27px 10px',
                color: '#e6e6e6',
                float: 'left',
                width: '100%'
        },
        iconitem:{
            display: 'flex',
            fontSize: '20px',
            margin:'1rem 0',
            alignItems: 'center',
        },
        iconitemstyle:{
            
            fontSize: '20px',
            backgroundColor: 'red',
            padding: '10px',
            borderRadius: '50%',
            width: '47px',
            height: '49px',
            marginRight:'1rem'
            
        },
        titie__item__greate:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
        }
        
    })
    const{icon_wrapper,iconitem,Home__Greate__Title4,Great__about__img,iconitemstyle,titie__item__greate,Home__Greate__Titlep}= useStyke()
  
    return (
        
        <>
      
        
        
        <div  className={Great__about__img}>
        <Grid sx={{ mx: 5 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={6} className={titie__item__greate}>

<div>
<div>
<h3 className={Home__Greate__Title4}>6 steps to great looks...</h3>
<p className={Home__Greate__Titlep}>Find the perfect Nail Polish stock photos and editorial news pictures from Getty Images. Select from 142146 premium Nail Polish of the highest quality </p>

</div>

</div>


    
  </Grid>
  <Grid item xs={12} md={6}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
  <Grid item xs={12} md={6}>
      
      

            <div className={icon_wrapper}>
                <div className={iconitem}>
                    <div className={iconitemstyle}>
                    < LocalPhoneIcon/> 
                    </div>
                
                <h4>Check</h4>
                </div>
                
                
                <p> dated, and signed instrument that directs a bank to pay a specific sum of money to the bearer</p> 
            
            </div>
   
 
  </Grid>
  <Grid item xs={12} md={6}>
      
      

            <div className={icon_wrapper}>
                <div className={iconitem}>
                    <div className={iconitemstyle}>
                    < CompareIcon /> 
                    </div>
                
                <h4>Compare</h4>
                </div>
                
                
                <p>Compare detailed specifications of mobile phones, smartphones and tablets side by side</p> 
            
            </div>
   
 
  </Grid>
  <Grid item xs={12} md={6}>
      
      

            <div className={icon_wrapper}>
                <div className={iconitem}>
                    <div className={iconitemstyle}>
                    < ShoppingCartIcon/> 
                    </div>
                
                <h4>Add To Cart</h4>
                </div>
                
                
                <p>Add to Cart is one of the UK's fastest-growing e-commerce marketplaces.</p> 
            
            </div>
   
 
  </Grid>
  <Grid item xs={12} md={6}>
      
      

            <div className={icon_wrapper}>
                <div className={iconitem}>
                    <div className={iconitemstyle}>
                    < PaymentIcon/> 
                    </div>
                
                <h4>Make Payment</h4>
                </div>
                
                
                <p>You can use the Google Pay app for fast, simple, and secure online payments. </p> 
            
            </div>
   
 
  </Grid>
  <Grid item xs={12} md={6}>
      
      

            <div className={icon_wrapper}>
                <div className={iconitem}>
                    <div className={iconitemstyle}>
                    < DeliveryDiningIcon/> 
                    </div>
                
                <h4>Accept Delivery</h4>
                </div>
                
                
                <p>To accept a delivery: Once logged in, click Orders. Click on the Gig title to </p> 
            
            </div>
   
 
  </Grid>
  <Grid item xs={12} md={6}>
      
      

            <div className={icon_wrapper}>
                <div className={iconitem}>
                    <div className={iconitemstyle}>
                    < AcUnitIcon/> 
                    </div>
                
                <h4>Start Using!</h4>
                </div>
                
                
                <p>Hi. I'd like to know the right grammar in the following sentences. </p> 
            
            </div>
   
 
  </Grid>
  
  
 
</Grid>
  </Grid>
 
        </Grid>
        </div>
        
        </>
    );
};

export default Greatlooks;