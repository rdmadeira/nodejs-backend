import express from 'express';
import path from 'path';

import indexRouter from './routes/index.js';
import { __dirname } from './paths.js';

export const app = express();

// Global Middlewares:
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json());
app.use('/api/', indexRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/pages/error.html'));
});

app.get('/', (req, res) => {
  res.json({ message: 'To use the api, start request with domain/api/' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server initialized on port ' + PORT));
