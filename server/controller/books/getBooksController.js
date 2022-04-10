const { getBooksQuery } = require('../../database/queries');

const getBooksController = (req, res, next) => {
  getBooksQuery()
    .then((data) => res.status(200).json({ data: data.rows }))
    .catch((error) => next(error));
};
module.exports = getBooksController;
