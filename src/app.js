import express from 'express';
import compression from 'compression';
import { json, urlencoded } from 'body-parser';
import { setUpControllers } from './controllers';

const app = express();

app.use(compression());
app.use(urlencoded({ extended: false }));
app.use(json());

app.get('/', (req, res) => res.json({ message: 'ok' }));

setUpControllers(app);

export default app;
