const { deleteBookQuery } = require('../../database/queries');

const deleteBookController = (req, res, next) => {
  const { id } = req.params;
  deleteBookQuery(id)
    .then(() => res.status(201).json({ status: 201, message: 'successfully delete book' }))
    .catch((error) => next(error));
};
module.exports = deleteBookController;
