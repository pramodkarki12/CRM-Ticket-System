const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

// Configuration
const app = express();

// PORT
const port = process.env.PORT || 3001;

// API Security
app.use(helmet());

// Handle CORS error
app.use(cors());

// Logger
app.use(morgan('tiny'));

// set body parser
// app.use(bodyParser(urlencoded({ extended: true })));
app.use(bodyParser.json());

// Load routers
const userRouter = require('./src/routers/user.router');
const ticketRouter = require('./src/routers/ticket.router');

app.use('/v1/user', userRouter);
app.use('/v1/ticket', ticketRouter);

// Error Handler
const handleError = require('./src/utils/errorHandler');
app.use((req, res, next) => {
  const error = new Error('Resources not found');
  error.status = 404;

  next(error);
});
app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
