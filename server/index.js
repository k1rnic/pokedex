/* eslint-disable global-require */
import Hapi from '@hapi/hapi';
import fs from 'fs';
import handlebars from 'handlebars';
import { setPath } from 'hookrouter';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../src/App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // eslint-disable-next-line import/no-extraneous-dependencies
  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request) => {
      setPath(request.path);
      const indexHTML = path.join(process.cwd(), 'dist', 'index.html');
      const content = ReactDOM.renderToString(<App />);
      const template = handlebars.compile(fs.readFileSync(indexHTML, 'utf8'));
      const page = template({ content });

      return page;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
