import express from 'express';
import configEnv from 'dotenv';
import logger from 'morgan';
import bodyParser from 'body-parser';
import user from './routes/user';
import event from './routes/event';
import center from './routes/center';

configEnv.config();

// Set up express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/v1/users', user);
app.use('/api/v1/events/', event);
app.use('/api/v1/centers', center);

app.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to Events Manager API'
}));

// Handle routes that doesn't match
app.use((req, res, next) => {
  const err = res.status(404).send({
    message: '404: Sorry Page Not Found!'
  });
  next(err);
});

export default app;
