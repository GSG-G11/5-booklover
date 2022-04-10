import React from "react";
import "./AddBook.css";

const AddBook = (props) => {
  const {
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
  } = props;
  return (
    displayModalAdd && (
      <div className="add-modal">
        <form className="form-add">
          <h2 className="add-book-text">Add Book</h2>
          <div>
            <label>Name</label>
            <input
              className="input-add"
              type="text"
              placeholder="Book Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              className="input-add description"
              placeholder="Book Description"
            ></textarea>
          </div>
          <div>
            <label>Author</label>
            <input
              className="input-add "
              type="text"
              placeholder="Karam Zomlot"
              name="author"
              value={author}
              onChange={handleChange}
            />
          </div>
          <div className="category-price">
            <div>
              <label>Category</label>
              <select
                value={category}
                onChange={handleChange}
                className="category input-add"
              >
                {categories.map((category) => {
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
                className="input-add price"
                type="number"
                placeholder="100"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Image Url</label>
            <input
              className="input-add"
              type="text"
              placeholder="http://"
              name="imageUrl"
              value={imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className="add-form-Btns">
            <button type="click" className="add-form-Btn">
              Add
            </button>
            <button
              type="click"
              className="cancle-form-Btn"
              onClick={handleDisplayAddForm}
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default AddBook;
