const Joi = require('joi');

const addBookSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  author: Joi.string().required(),
  imageUrl: Joi.string().required(),
});

module.exports = addBookSchema;
