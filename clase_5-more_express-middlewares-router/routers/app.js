import express from 'express';
import userRouter from './routes/users.js';
import contactsRouter from './routes/contacts.js';
import indexRouter from './routes/indexRouter.js';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Levantar el servidor y registrar los middlewares globales:

const app = express();

// Global Middlewares:
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes:
app.use('/api/user', userRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api', indexRouter);
app.use((req, res, next) => {
  const oopsUrl = __dirname + 'assets/404_broken_book.jpg';

  res.status(404).send(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error - 404 Not Found</title>
  </head>
  <body>
    <h2>Cannot Get ${req.url}</h2>
    <div><img src='http://localhost:5000/public/assets/404_broken_book.jpg' alt="Error"/></div>
    <span>${res.statusCode}</span>
    <p>Request without response - Try another route.</p>
  </body>
</html>
  `);
});

app.listen(5000, () => {
  console.log('Server running on port 5000...');
});
