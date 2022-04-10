const connection = require('../config/connection');

const deleteBookQuery = (id) => {
  const sql = {
    text: 'delete from Books where id=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteBookQuery;
