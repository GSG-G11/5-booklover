const { editBookQuery } = require('../../database/queries');
const { addBookSchema, castmaizeError } = require('../../utils');

const editBookController = (req, res, next) => {
  const {
    name,
    description,
    price,
    category,
    author,
    imageUrl,
    id,
  } = req.body;
  addBookSchema.validateAsync(
    {
      name, description, price, category, author, imageUrl,
    },
    { abortEarly: false },
  )
    .then(() => editBookQuery({
      name, description, price, category, author, imageUrl, id,
    }))
    .then((data) => {
      if (data.rowCount) {
        res.json({ status: 201, message: 'Edit Book Successfully' });
      } else {
        throw castmaizeError({ status: 500, message: 'serverError' });
      }
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        const message = error.details.map((i) => i.message);
        next(castmaizeError(400, message));
      } else {
        next(error);
      }
    });
};
module.exports = editBookController;
