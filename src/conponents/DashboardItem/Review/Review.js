
import React from 'react';
import { useForm} from "react-hook-form";


import './Review.css'

const Review = () => {
  
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
    
fetch('https://morning-ocean-42077.herokuapp.com/rating',{
    method:'POST',
     headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)})


     .then(res=>res.json())
    .then(data=>{
          
       
    
 if(data.insertedId){
    reset()
    alert('Rating Added Successfully')
    console.log(data)
    }
     })
    
     }
      
    return (
      

        <div className="header-rev">
           
           <div className="container">
            <div className="row">

            <div className="col-md-8 explore">
            <div><h1 className="banner__title">You can Rating our products </h1>
            <p className="banner__subtitle">Discover your next great adventure, become an explorer to get started!</p></div>
            </div>
            <div className="col-md-4">
            
            <form onSubmit={handleSubmit(onSubmit)}id="form">

                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <br />
                    
                    <div className="input-group">
                    <input id="name" defaultValue='' {...register("name")} required/>
                    </div>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="name">Your profile image Url</label>
                    <br />
                    
                    <div className="input-group">
                    <input id="name" defaultValue='' {...register("img")}/>
                    </div>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="name">Your Rating</label>
                    <br />
                    <div className="input-group">
                    <input  name="number" type="number" {...register("Rating")} min="1" max="5" step="0.5" required/>
                    
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="name">Your Description</label>
                    <br />
                    <div className="input-group">
                    <textarea id="name" {...register("description")} placeholder="Enter Your Description"></textarea>
                    
                    </div>
                </div>
                

                {errors.exampleRequired && <span>This field is required</span>}
      
                <input className="btn btn-outline-secondary" type="submit" />
  

            </form>
            
            </div>


            </div>
            </div>








            
        </div>
    );
};

export default Review;