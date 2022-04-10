/* eslint-disable no-console */
const { getSingleBookQuery } = require('../../database/queries');

const getSingleBookController = (req, res, next) => {
  const { id } = req.params;
  getSingleBookQuery(id)
    .then((data) => res.status(200).json({ data: data.rows[0] }))
    .catch((error) => next(error));
};
module.exports = getSingleBookController;
