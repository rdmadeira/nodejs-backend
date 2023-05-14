import Todo from '../models/Todos.js';

export const createTodoHandler = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = await Todo.create({ title, description });

  console.log(newTodo);
  res.status(200).json({ message: 'Todo created!!!', data: newTodo });
};

export const getTodosHandler = async (req, res) => {
  const todos = await Todo.find(); // se no pasa ningún objecto, devuelve todo en un array!!
  res.status(200).json({ data: todos, message: 'Getted all todos!!' });
};

export const updateTodo = async (req, res) => {
  const { id, isCompleted } = req.body;

  // 1ro parametro, id, segundo, lo que se actualiza, el tercero, opciones: By default,
  // findOneAndUpdate() returns the document as it was before update was applied. If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
  const todo = await Todo.findByIdAndUpdate(id, { isCompleted }, { new: true });
  res.json({ data: todo });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);

  res.json({ message: 'Todo eliminado correctamente!!', data: null });
};
