import React from "react";
import "./AddBook.css";

const AddBook = (props) => {
  let {
    categories,
    displayModalAdd,
    name,
    price,
    author,
    category,
    imageUrl,
    description,
    handleChange,
    handleDisplayAddForm,
    addBook,
    errorAddBook,
    editMode,
  } = props;

  return (
    displayModalAdd && (
      <div className='add-modal'>
        <form className='form-add'>
          <h2 className='add-book-text'>{editMode ? 'Edit' : 'Add'} Book</h2>
          <div>
            <label>Name</label>
            <input
              className='input-add'
              type='text'
              placeholder='Book Name'
              name='name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name='description'
              value={description}
              onChange={handleChange}
              className='input-add description'
              placeholder='Book Description'></textarea>
          </div>
          <div>
            <label>Author</label>
            <input
              className='input-add '
              type='text'
              placeholder='Karam Zomlot'
              name='author'
              value={author}
              onChange={handleChange}
            />
          </div>
          <div className='category-price'>
            <div>
              <label>Category</label>
              <select
                name='category'
                value={category}
                onChange={handleChange}
                className='category input-add'>
                {categories.slice(1).map((category) => {
                  return (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>Price</label>
              <input
                className='input-add price-input'
                type='number'
                placeholder='100'
                name='price'
                value={price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Image Url</label>
            <input
              className='input-add'
              type='text'
              placeholder='http://'
              name='imageUrl'
              value={imageUrl}
              onChange={handleChange}
            />
          </div>
          <span className="error">{errorAddBook}</span>

          <div className='add-form-Btns'>
            <button
              type='click'
              className='add-form-Btn'
              onClick={(e) => addBook(e)}>
              {editMode ? 'Save' : 'Add'}
            </button>
            <button
              type='click'
              className='cancle-form-Btn'
              onClick={handleDisplayAddForm}>
              Cancle
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddBook;
