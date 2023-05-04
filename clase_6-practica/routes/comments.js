import express from 'express';
import { __dirname } from '../paths.js';
import {
  createPostCommentHandler,
  getPostCommentsHandler,
  getAllCommentsHandler,
} from '../handlers/commentsHandlers.js';

const router = express.Router();

router
  .get('/', getAllCommentsHandler)
  .get('/post/:postId', getPostCommentsHandler)
  .post('/post/:postId', createPostCommentHandler);

export default router;
