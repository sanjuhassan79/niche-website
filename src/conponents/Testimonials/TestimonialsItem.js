import { Card } from '@mui/material';
import React from 'react';
import './TestimonialsItem.css'
import ReactStars from "react-rating-stars-component";
const TestimonialsItem = (props) => {

    const{name,img,Rating,description}=props.rats
    // const [value, setValue] = React.useState([]);
    return (
        <Card sx={{ maxWidth: 308,my:3}}>
<div className="testimonial">
	<div className="testimonial-body">
		<p>{description.slice(1,100)}</p>
		<i className="fas fa-quote-right"></i>
	</div>
	<div className="testimonial-footer">
		<img src={img} alt="user" />
		<h3>{name}</h3>
        <ReactStars
    count={5}
    value={Rating}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
	</div>
</div>
</Card>
    );
};

export default TestimonialsItem;