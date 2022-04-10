require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DATABASE_URL, DATABASE_URL_DEV,
} = process.env;
let URL;
let SSL = false;

switch (NODE_ENV) {
  case 'development':
    URL = DATABASE_URL_DEV;
    break;
  case 'production':
    URL = DATABASE_URL;
    SSL = { rejectUnauthorized: false };
    break;
  default:
    throw new Error('NODE_ENV is not set to development, production');
}

const connection = new Pool({
  connectionString: URL,
  ssl: SSL,
});

module.exports = connection;
