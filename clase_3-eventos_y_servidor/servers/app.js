import http from 'http';
import fs from 'fs';
import users from './users.json' assert { type: 'json' };
import { v4 as uuidv4 } from 'uuid';

const server = http.createServer(
  /* Pide como parametro una funcion callback */ (req, res) => {
    console.log('Alguien accedió al puerto!'); // no ocurre nada por acá, si no abris el puerto,
    // en una browser por ejemplo.

    // El gigante objeto req tiene propriedades importantes, como method, url, events, headers, etc.
    /* console.log(req.url, req.headers, req.method); */
    const url = req.url;
    const method = req.method;

    if (url === '/') {
      // Tenemos por ejemplo, header del req y header del res. Vamos a setear el header del res,
      // lo que es una buena práctica. Informamos el tipo de contenido que va llegar al cliente. En el
      // browser, va a aparecer en Response Headers el contenido seteado.
      // En el header de request si podrá por ej, enviar un token de confirmación, y el de response,
      // validaria este token.
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
            <head>
                <title>Mi app Node</title>
            </head>
            <body>
                <h1>Hola mi App desde Node</h1>
                <a href="about">Ir a about</a>
                <a href="users">Ir a users</a>
            </body>
        </html>
        `);
      /* El return es necesário para que no cause un error de timeOut, porque el sevidor sigue corriendo. */
      return res.end();
    } else if (url === '/about') {
      // Tenemos por ejemplo, header del req y header del res. Vamos a setear el header del res,
      // lo que es una buena práctica. Informamos el tipo de contenido que va llegar al cliente. En el
      // browser, va a aparecer en Response Headers el contenido seteado.
      // En el header de request si podrá por ej, enviar un token de confirmación, y el de response,
      // validaria este token.
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
            <head>
                <title>Mi app Node</title>
            </head>
            <body>
                <h1>About desde Node</h1>
                <a href="message">Ir a Messages</a>
            </body>
        </html>
        `);
      /* El return es necesário para que no cause un error de timeOut, porque el sevidor sigue corriendo. */
      return res.end();
    } else if (url === '/message' && method === 'GET') {
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
            <head>
                <title>Mi app Node</title>
            </head>
            <body>
                <form action="/message" method="POST">
                    <input name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
        `);
      return res.end();
    } else if (url === '/message' && method === 'POST') {
      let body = [];
      req.on('data', (chunk /* Está relacionado a un stream */) => {
        console.log(chunk); // El chunk es un Buffer
        body.push(chunk);
      });
      req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody
          .split('=')[1]
          .replaceAll('+', ' ')
          .replaceAll('%21', '!');
        console.log(message);

        //Cuando termine, crea un archivo:
        fs.writeFileSync('message.txt', message); // En la verdad se debe usar async writeFile, para evitar bloqueos.
      });
      res.statusCode = 302; // En el Network de devtools, aparecerá el status 302 como found
      res.setHeader('Location', '/');
      res.end();
    } else if (url === '/users' && method === 'GET') {
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
            <head>
                <title>Mi app Node</title>
            </head>
            <body>
            <a href="/">Back to Home</a>
            ${Object.keys(users).map((key) => {
              return `<p>${users[key]}</p>`;
            })}
                <form action="/users" method="POST">
                    <input name="users">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
        `);
      return res.end();
    } else if (url === '/users' && method === 'POST') {
      req.on('data', (chunk) => {
        const newUser = chunk.toString().split('=')[1].replaceAll('+', ' ');
        const newId = uuidv4();
        users[newId] = newUser;
        Object.keys(users).forEach((userId) => console.log(userId));
        fs.writeFileSync('users.json', JSON.stringify(users));
      });
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      return res.end();
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
            <head>
                <title>Mi app Node</title>
            </head>
            <body>
                <h1>404 - Not Found</h1>
                <a href="/">Ir a Home</a>
            </body>
        </html>
        `);
      res.statusCode = 404;
      return res.end();
    }
  }
);

server.listen(5000, () => {
  console.log('Running server port 5000'); // Acá sí pasa algo, se ejecuta el proceso
});

//METHODS TYPE - "CRUD" (CREATE = 'POST', READ ='GET', UPDATE = 'PUT', DELETE = 'DELETE')
