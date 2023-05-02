import express from 'express';
import {
  postsGetHandler,
  postsPostHandler,
  userPostsGetHandler,
} from '../handlers/postsHandler.js';

import { __dirname } from '../paths.js';

const router = express.Router();

router.get('/:id/', userPostsGetHandler);

router.post('/:id/', postsPostHandler);

router.get('/', postsGetHandler);

router.post('/', postsPostHandler);

export default router;
