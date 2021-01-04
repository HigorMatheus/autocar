import express from 'express';
import { json } from 'body-parser';
import Routes from './routes';

const app = express();
app.use(json());
app.use(Routes);

app.listen(3333, () => console.log('🚀 Server start http://localhost:3333 '));
