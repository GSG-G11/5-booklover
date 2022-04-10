const connection = require('../config/connection');

const addBookQuery = ({
  name, description, price, category, author, imageUrl,
}) => {
  const sql = {
    text: 'INSERT INTO Books (name, description, price, category, author, imageUrl) VALUES ($1,$2,$3,$4,$5,$6) Returning *',
    values: [name, description, price, category, author, imageUrl],
  };
  return connection.query(sql);
};
module.exports = addBookQuery;
