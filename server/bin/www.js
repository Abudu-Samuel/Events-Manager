import webpack from 'webpack';
import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';
import app from '../app';

const compiler = webpack(webpackConfig);
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
  
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.resolve(__dirname, '../../client')));
app.get('*', (req, res) => (
  res.sendFile(path.join(__dirname, '../../client/index.html'))
));

app.listen(app.get('port'), () => {
  console.log(`app running on localhost:${app.get('port')}`);
});
