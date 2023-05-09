import Todo from '../models/Todos.js';

export const createTodoHandler = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = await Todo.create({ title, description });

  console.log(newTodo);
  res.status(200).json({ message: 'Todo created!!!', data: newTodo });
};
