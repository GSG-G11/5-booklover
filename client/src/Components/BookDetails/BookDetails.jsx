import React, { Component } from 'react';
import './BookDetails.css';
import { Link } from "react-router-dom";

class BookDetails extends Component {
state={
 book:[],
 err:''
}

componentDidMount(){
  fetch(`/api/v1/book/${this.props.id}`).then(res=>{
    if(res.status===200){
      return res.json();
    }
  }).then(data=>this.setState({book:data.data})).catch(err=>console.log(err))
}
  render(){
    const {book:{id, author,description,imageurl,name,price}} = this.state
    const { addToCart, isLogin } = this.props;
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='image'>
            <img className='book-image' src={imageurl} alt={name} />
          </div>

          <div className='data'>
            <div className='iconStart'>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='checked'>
                <i className='ri-star-fill'></i>
              </span>
              <span className='notCheck'>
                <i className='ri-star-line'></i>
              </span>
              <span className='num'> 45 </span>
            </div>
            <div className='content'>
              <h3 className='title'>{name}</h3>
              <span className='author'>{author}</span>
              <p className='text'>{description}</p>
              <h3 className='price'> $ {price}</h3>
            </div>

            <div className='buttons'>
              {isLogin ? null : (
                <button
                  className='Buy'
                  onClick={() =>
                    addToCart({
                      id,
                      author,
                      description,
                      imageUrl: imageurl,
                      name,
                      price,
                    })
                  }>
                  <i className='ri-add-line'></i>
                  Add To Cart
                </button>
              )}
              <Link to='/books' className='browser '>
                Continue Browsing
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default BookDetails;
