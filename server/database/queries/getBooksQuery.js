const connection = require('../config/connection');

const getBooksQuery = () => {
  const sql = {
    text: 'select * from Books ',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getBooksQuery;
