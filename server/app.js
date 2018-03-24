import express from 'express';
import configEnv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import Router from './routes/index';


configEnv.config();
// Set up express app
const app = express();
// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
Router(app);


// Handle routes that doesn't match
// app.use((req, res, next) => {
//   const err = res.status(404).send({
//     message: '404: Sorry Page Not Found!'
//   });
//   next(err);
// });

export default app;
