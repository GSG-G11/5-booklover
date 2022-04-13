const connection = require('../config/connection');

const getBooksQuery = () => {
  const sql = {
    text: 'select * from Books ORDER BY Books.id Desc',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getBooksQuery;
