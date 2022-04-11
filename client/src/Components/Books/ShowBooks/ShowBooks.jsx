import React, { Component } from 'react'
import BookCard from './BookCard/BookCard';
import './ShowBooks.css';
// { isLogin }
class ShowBooks extends Component {
 
  render(){
const {isLogin} = this.props
    return (
      <section className='books-side'>
        <div className='books-header'>
          <h2 className='sec-title'>Books</h2>
          {isLogin ? (
            <button className='btn filter-btn'>
              <i class="ri-add-line"></i>
              Add Book
            </button>
          ) : null}
        </div>
        <div className='books-grid'>
          <BookCard
            id={1}
            name={'The Diary of a Young Girl'}
            price={14.5}
            category={'History'}
            author={'Anne Frank'}
            imageUrl={
              'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9789352782772_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
            }
            isLogin={isLogin}
          />
          
        </div>
      </section>
    );

  }

};

export default ShowBooks