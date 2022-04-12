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
    // author: "Harper Lee"
    // category: "Arts"
    // description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    // id: 3
    // imageurl: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780060935467_p0_v12%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
    // name: "To Kill a Mockingbird"
    // price:
    const {book:{author,description,imageurl,name,price}} = this.state
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='image'>
            <img
              className='book-image'
              src={imageurl}
              alt={name}
            />
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
              <h3 className='title'>
                {name}
              </h3>
              <span className='author'>{author}</span>
              <p className='text'>
               {description}
              </p>
              <h3 className='price'> $ {price}</h3>
            </div>
    
            <div className='buttons'>
              <Link to='/cart' className='Buy '>
                Buy
              </Link>
              <Link to='/' className='browser '>
                Continue Browsing
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

};

export default BookDetails;
