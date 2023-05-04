import express from 'express';
import { __dirname } from '../paths.js';

import {
  usersGetHandler,
  usersPostHandler,
  userGetHandler,
  userGetDinamicHandler,
  usersDeleteHandler,
} from '../handlers/usersHandlers.js';

const router = express.Router();

router
  .get('/', usersGetHandler)

  .post('/', usersPostHandler)
  .delete('/', usersDeleteHandler);

router.get('/user', userGetHandler);

router.get('/:id/', userGetDinamicHandler);

export default router;
