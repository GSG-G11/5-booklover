const connection = require('../config/connection');

const getSingleBookQuery = (id) => {
  const sql = {
    text: 'select * from Books where id=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getSingleBookQuery;
