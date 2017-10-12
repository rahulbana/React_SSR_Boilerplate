import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const port = process.env.PORT || 8080
const server = express();

server.use('/assets', express.static('assets'));
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const appString = renderToString(<App />);
  res.send(template({
    body: appString
  }));
});

server.listen(port, () => {
  console.log('listening @ port '+port);
});
