const connection = require('../config/connection');

const addBookQuery = ({
  name, description, price, category, imageUrl,
}) => {
  const sql = {
    text: 'INSERT INTO Books (name, description, price, category, imageUrl) VALUES ($1,$2,$3,$4,$5) Returning *',
    values: [name, description, price, category, imageUrl],
  };
  return connection.query(sql);
};
module.exports = addBookQuery;
