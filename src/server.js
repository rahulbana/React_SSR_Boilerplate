import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';
import template2 from './template2';

const server = express();

server.use('/assets', express.static('assets'));
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const appString = renderToString(<App />);
  res.send(template({
    body: appString,
    title: 'Hello World from the server'
  }));
});

server.listen(8080);
console.log('listening');
