import { Grid, TextField,Button,Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Contact.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Footer from '../Footer/Footer';
const Contact = () => {


    const useStyke=makeStyles({
        Home__map__img:{
            width:'100%',
            marginBottom:'4rem'
           


        },
        map__img:{
            height:'70vh'
        },
        contact_address:{
            marginBottom: '20px',
                padding: '0 10px',
                listStyle: 'none',
                textAlign: 'center'

            
        },
        icon_wrapper:{

                 padding: '27px 10px',
                border: '1px solid #e6e6e6',
                float: 'left',
                width: '100%'
        },
        icon:{
            display: 'inline-block',
            fontSize: '20px',
            height: '70px',
            lineHeight: '70px',
            marginBottom: 'px',
            position: 'relative',
            textAlign: 'center',
            width: '70px',
            color: '#ac192c',
            '&::before': {
                background: '#ac192c',
                content: "",
                height: '50px',
                left: '0',
                margin: '0 auto',
                position: 'absolute',
                right: '0',
                top: '10px',
                transform: 'rotate(45deg)',
                width: '50px',
                zIndex: '-1'
              }
        }
        
    })
    const{Home__map__img,map__img,contact_address,icon_wrapper,icon}= useStyke()
  
    return (
        
        <>
        <Navigation></Navigation>
        <div className={Home__map__img}>
            <img className={map__img} src="https://i.stack.imgur.com/HILmr.png" alt="" />

        </div>
        <Container >
        <Grid sx={{ mx: 5 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={6}>

<div>

<form>
              
              <TextField 
              sx={{width:'75%',m:2}} 
              id="standard-basic" 
              label="Your Name" 
             
              name="Name"
              type="Name"
              variant="standard" />
                <TextField
                           sx={{ width: '75%', m: 2 }}
                           id="standard-basic"
                           label="Your Email"
                           type="Email"
                           name="Email"
                          
                           variant="standard" />
                <TextField
                           sx={{ width: '75%', m: 2 }}
                           id="standard-basic"
                           label="Your Subject"
                           type="Subject"
                           name="Subject"
                          
                           variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 2 }}
                    id="standard-basic"
                    label="Your Subject"
                    multiline
                    rows={5}
                    
                    />
                       
              
              <Button type="submit" sx={{width:'75%',m:2}} style={{backgroundColor:'#6a2b36'}}variant="contained">Send</Button>
              <br />
              </form>

</div>


    
  </Grid>
  <Grid item xs={12} md={6}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
  <Grid item xs={12} md={6}>
      
      <div className={contact_address}>

            <div class={icon_wrapper}>
                <div class={icon}>
                <LocalPhoneIcon/> 
                </div>
                
                <h4>Talk to us</h4>
                <p>  <b>Toll-Free: </b> 0803 - 080 - 3081 <br/><b>Fax: </b> 0803 - 080 - 3082</p> 
            
            </div>
      </div>
 
  </Grid>
  <Grid item xs={12} md={6}>
  <div className={contact_address}>

<div class={icon_wrapper}>
    <div class={icon}>
    <EmailIcon/> 
    </div>
    
    <h4>Contact Us</h4>
    <p>buddhathemes@somemail.com<br/>support@somemail.com</p> 

</div>
</div>
  </Grid>
  <Grid item xs={12} md={6}>
  <div className={contact_address}>

<div class={icon_wrapper}>
    <div class={icon}>
    <AddLocationAltIcon/> 
    </div>
    
    <h4>Location</h4>
    <p>No: 58 A, East Madison Street,<br/>Baltimore, MD, USA 4508</p> 

</div>
</div>
  </Grid>
  <Grid item xs={12} md={6}>
  <div className={contact_address}>

            <div class={icon_wrapper}>
                <div class={icon}>
                <AccessTimeFilledIcon/> 
                </div>
                
                <h4>Openign Hours</h4>
                <p>Mon – Sat 9 am to 8 pm<br/>Sun – 10 am to 3 pm</p> 
            
            </div>
      </div>
  </Grid>
</Grid>
  </Grid>
 
        </Grid>
        </Container>
        
<Footer></Footer>
        </>
    );
};

export default Contact;