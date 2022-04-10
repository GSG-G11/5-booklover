const { addBookQuery } = require('../../database/queries');
const { addBookSchema, castmaizeError } = require('../../utils');

const addBookController = (req, res, next) => {
  const {
    name,
    description,
    price,
    category,
    imageUrl,
  } = req.body;
  addBookSchema.validateAsync(req.body, { abortEarly: false })
    .then(() => addBookQuery({
      name, description, price, category, imageUrl,
    }))
    .then((data) => {
      if (data.rowCount) {
        res.json({ status: 201, message: ' added Book Successfully' });
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
module.exports = addBookController;
