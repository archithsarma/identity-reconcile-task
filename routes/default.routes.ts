import { Router } from 'express';
import { initiliazeServer } from '../controller/main.controller';

export const router: Router = Router();

router.get('/start', initiliazeServer);

 