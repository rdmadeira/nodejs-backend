import express from 'express';

const app = express();
app.all('/', (req, res) => {
  // esta función es el controlador, o handler
  res.send(`
        <html>
            <head>
                <title>Hola Express</title>
            </head>
            <body>
                <h1>Hola mi App desde Express</h1>
                <a href="about">Ir a about</a>
                <a href="users">Ir a users</a>
            </body>
        </html>
        `);

  console.log('Hola mi app desde express');
}); // para todas las rutas apartir de hash, se ejecutará esta función, el all quiere decir todos los metodos de http (GET, POST, DELETE, PUT, PATH)

// express utiliza el listen de node. Se ahorra el create server de node.
app.listen(5000, () => {
  console.log('Server running on port 5000...');
});
