import express from 'express';
import path from 'path';
import commentsRouter from './comments.js';
import usersRouter from './users.js';
import postsRouter from './posts.js';
import { __dirname } from '../paths.js';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '//pages//index.html'));
});

export default router;
