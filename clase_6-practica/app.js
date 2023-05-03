import express from 'express';
import path from 'path';

import indexRouter from './routes/index.js';
import commentsRouter from './routes/comments.js';
import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';

import { __dirname } from './paths.js';

const app = express();

// Global Middlewares:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/pages/error.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server initialized on port ' + PORT));
