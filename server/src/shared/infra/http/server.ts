import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import routes from './routes/index';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () =>
  // eslint-disable-next-line no-console
  console.log('🚀 Server start http://localhost:3333 '),
);
