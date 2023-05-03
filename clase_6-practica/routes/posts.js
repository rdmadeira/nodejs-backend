import express from 'express';
import {
  postsGetHandler,
  postsPostHandler,
  userPostsGetHandler,
} from '../handlers/postsHandler.js';

import { __dirname } from '../paths.js';

const router = express.Router();

router
  .get('/:userId/', userPostsGetHandler)

  .post('/:userId/', postsPostHandler);

router
  .get('/', postsGetHandler)

  .post('/', postsPostHandler);

export default router;
