require('dotenv').config();
import express, { RequestHandler } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { router } from './routes/default.routes';

export const app = express();

app.use(cors());

app.use(json() as RequestHandler);

app.use('/main', router);
