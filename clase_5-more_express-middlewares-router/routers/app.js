import express from 'express';
import userRouter from './routes/users.js';
import contactsRouter from './routes/contacts.js';

// Levantar el servidor y registrar los middlewares globales:

const app = express();

// Global Middlewares:
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes:
app.use('/api/user', userRouter);
app.use('/api/contacts', contactsRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000...');
});
