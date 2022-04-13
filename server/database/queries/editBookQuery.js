const connection = require('../config/connection');

const editBookQuery = ({
  name,
  description,
  price,
  category,
  author,
  imageUrl,
  id,
}) => {
  const sql = {
    text: `UPDATE 
            Books SET name=$1,
            description=$2,
            price=$3,
            category=$4,
            author=$5,
            imageUrl=$6
            WHERE id=$7
            RETURNING *`,
    values: [name, description, price, category, author, imageUrl, id],
  };

  return connection.query(sql);
};

module.exports = editBookQuery;
