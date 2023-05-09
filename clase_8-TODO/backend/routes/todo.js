import { Router } from 'express';
import { createTodoHandler } from '../handlers/todoHandlers.js';

const router = Router();

router.post('/', createTodoHandler);

export { router as todoRouter };
