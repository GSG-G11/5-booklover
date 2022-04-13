const { clientError, serverError } = require('./error');
const {
  addBookController,
  deleteBookController,
  getBooksController,
  getSingleBookController,
  editBookController,
} = require('./books');

module.exports = {
  clientError,
  serverError,
  addBookController,
  deleteBookController,
  getBooksController,
  getSingleBookController,
  editBookController,
};
