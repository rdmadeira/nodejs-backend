import express from 'express';
import dotenv from 'dotenv';

import { connectToDB } from './config/connection.js';
import { todoRouter } from './routes/todo.js';
import cors from 'cors';

// Config
dotenv.config(); // Reconoce el archivo como variable de entorno
const server = express();
connectToDB(); // Conecta a la base de datos de Mongo

// Middleware habilitando cors
server.use(cors());
// Middlewares Globales:
server.use(express.json());
server.get('/', (req, res) => {
  res.json({ message: 'Please use /api/<entidad> to request API' });
});
server.use('/api/v1/todo', todoRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on port ' + PORT));
