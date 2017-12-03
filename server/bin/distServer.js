import express from 'express';
import path from 'path';
import app from '../app';

const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../client-dist')));
app.get('*', (req, res) => (
  res.sendFile(path.join(__dirname, '../../client-dist/index.html'))
));

app.listen(app.get('port'), () => {
  console.log(`app running on localhost:${app.get('port')}`);
});
