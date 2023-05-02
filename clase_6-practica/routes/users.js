import express from 'express';
import { __dirname } from '../paths.js';

import {
  usersGetHandler,
  usersPostHandler,
  userGetHandler,
  userGetDinamicHandler,
} from '../handlers/usersHandlers.js';

const router = express.Router();

router.get('/', usersGetHandler);

router.post('/', usersPostHandler);

router.post('/user', userGetHandler);

router.get('/:id/', userGetDinamicHandler);

export default router;
