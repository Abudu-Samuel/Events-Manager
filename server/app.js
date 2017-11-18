import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Set up express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up first route
app.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to Events Manager API'
}));

export default app;
