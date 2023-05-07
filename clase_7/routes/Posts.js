import { Router } from 'express';
import {
  createPostHandler,
  getPostsHandler,
} from '../controllers/postsHandler.js';

const router = Router();

router.get('/', getPostsHandler).post('/', createPostHandler);

export { router as Post };
