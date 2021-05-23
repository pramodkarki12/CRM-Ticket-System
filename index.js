const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// Configuration
const app = express();
const router = express.Router();

// PORT
const port = process.env.PORT || 5000;

// API Security
app.use(helmet());

// Handle CORS error
app.use(cors());

// Logger
app.use(morgan()); 

app.use('/', (req, res, next) => {
  res.json({ message: 'Hello Coder' });
});

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
