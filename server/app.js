require('dotenv').config();
const { join } = require('path');
const express = require('express');
const apiRouter = require('./router');
const { clientError, serverError } = require('./controller/error');

const app = express();

app.set('port', process.env.PORT || 8080);
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

module.exports = app;
