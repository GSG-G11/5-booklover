const express = require('express');
const {
  getSingleBookController, getBooksController, deleteBookController, addBookController,
} = require('../controller');

const apiRouter = express.Router();
apiRouter.get('/book/:id', getSingleBookController);
apiRouter.get('/books/show', getBooksController);
apiRouter.post('/book', addBookController);
apiRouter.delete('/book/:id', deleteBookController);

module.exports = apiRouter;
