import React, { Component } from 'react';
import './BookDetails.css';
import { Link } from "react-router-dom";
import RelatedItem from '../RelatedItem/RelatedItem';
import Swal from 'sweetalert2';

class BookDetails extends Component {
  state = {
    book: [],
    err: '',
  };

  getSingleBook = () => {
    fetch(`/api/v1/book/${this.props.id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => this.setState({ book: data.data }))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }

  componentDidMount() {
    this.getSingleBook();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.id !== this.props.id){
      this.getSingleBook();
    }
  }

  render() {
    const {
      book: { id, author, description, imageurl, name, price, category },
    } = this.state;
    const { addToCart, isLogin, books } = this.props;
    const relatedBooks = books.filter(b => b.category === category && b.id !== id)
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
        {relatedBooks.length ? (
          <section className='related-books'>
            <h3 className='sec-title'>Related Items</h3>
            <div className='books'>
              {relatedBooks.splice(0, 5).map((book) => (
                <div className='single-related' key={book.id}>
                  <RelatedItem
                    imageUrl={book.imageurl}
                    id={book.id}
                    name={book.name}
                    category={book.category}
                    author={book.author}
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    );
  }
};

export default BookDetails;
