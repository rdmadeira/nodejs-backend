import express from 'express';

const app = express();

app.get('/', (req, res) => {
  // esta función es el controlador, o handler
  res.send(`
        <html>
            <head>
                <title>Hola Express</title>
            </head>
            <body>
                <h1>Hola mi App desde Express</h1>
                <a href="about">Ir a about</a>
                <a href="data">Get data</a>
            </body>
        </html>
        `);

  console.log('Hola mi app desde express');
});

app.get('/about', (req, res) => {
  // esta función es el controlador, o handler
  res.send(`
        <html>
            <head>
                <title>Hola Express About</title>
            </head>
            <body>
                <h1>Hola mi App desde Express About</h1>
                <a href="/">Ir a Home</a>
            </body>
        </html>
        `);

  console.log('Hola mi app desde express');
});

// ejemplo con un json: En el network de devtools, en el Headers de la respuesta, express ya nos resuelve
// que es un Content-Type: 'application/json solo, por el metodo json(), sin tenernos que declarar en los headers!!!'>
import contacts from './contacts.json' assert { type: 'json' };

app.get('/data', (req, res) => /* esta función es el controlador, o handler */ {
  res.json(contacts);
});

// express utiliza el listen de node. Se ahorra el create server de node.
app.listen(5000, () => {
  console.log('Server running on port 5000...');
});
