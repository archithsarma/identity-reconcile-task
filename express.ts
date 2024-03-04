require('dotenv').config();
import express, { RequestHandler } from 'express';
import cors from 'cors';
import { json } from 'body-parser';

export const app = express();

app.use(cors());

app.use(json() as RequestHandler);

