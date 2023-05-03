import express from 'express';
import { __dirname } from '../paths.js';
import {
  createPostCommentHandler,
  getPostCommentsHandler,
} from '../handlers/commentsHandlers.js';

const router = express.Router();

router
  .get('/post/:postId', getPostCommentsHandler)
  .post('/post/:postId', createPostCommentHandler);

export default router;
