import 'reflect-metadata';

import express from 'express';
import routes from './routes/index';

import '../typeorm/index';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () =>
  // eslint-disable-next-line no-console
  console.log('🚀 Server start http://localhost:3333 '),
);
