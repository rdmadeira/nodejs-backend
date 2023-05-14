import { Router } from 'express';
import {
  createTodoHandler,
  deleteTodo,
  getTodosHandler,
  updateTodo,
} from '../handlers/todoHandlers.js';

const router = Router();

router
  .post('/', createTodoHandler)
  .get('/', getTodosHandler)
  .put('/', updateTodo);

router.delete('/:id', deleteTodo);

export { router as todoRouter };
