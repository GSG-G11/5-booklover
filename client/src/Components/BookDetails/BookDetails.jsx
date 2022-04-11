import React from 'react';
import './BookDetails.css';
import { Link } from "react-router-dom";

const BookDetails = () => {

return(
<div className="container">
    <div className="wrapper">
		 <div className="image">
			 <img className="book-image" src="https://upload.wikimedia.org/wikipedia/ar/a/a1/The_Great_Gatsby_%282013%29_-_Poster.jpg"/>
		 </div>
      
      <div className="data">
        <div className='iconStart'>
      <span className='checked'><i className="ri-star-fill" ></i></span>
      <span className='checked'><i className="ri-star-fill" ></i></span> 
      <span className='checked'><i className="ri-star-fill" ></i></span> 
      <span className='checked'><i className="ri-star-fill" ></i></span> 
      <span className='notCheck' ><i className="ri-star-line" ></i></span> 
      <span className='num'> 45 </span>
        
        </div>
        <div className="content">
        <h3 className="title">Boxing icon has the will for a couple more fights</h3>
          <span className="author">Jane Doe</span>
          <p className="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
          <h3 className='price'> $15</h3>
        </div>

      <div className='buttons'>
      <Link to='/cart' className='Buy '>Buy</Link>
      <Link to='/' className='browser '>Continue Browsing</Link>
      </div>
      </div>
  </div>
</div>

)

};

export default BookDetails;
