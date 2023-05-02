import express from 'express';
import querystring from 'querystring';

const app = express();

// Mi primer middleware, global (corre para todas las rutas):
const fn = (req, res, next) => {
  console.log('run middleware todas las rutas');
  /* console.log(req); */
  next();
};

// Middleware exclusivo para about
const fnParaAbout = (req, res, next) => {
  console.log('run middleware about');
  if (req.headers.authorization === 'Basic 12345678') {
    next();
  } else {
    res.status(403).json({ message: 'Eror!!!!!!!!!!!!!!!!!!!!!!!!' });
    console.log('Error!!!!!!!!!!!!!!!');
  }
};

//app.use(fn) corre para todas las rutas:
app.use(express.static('public'));

app.use('/about', fnParaAbout); // corre para todos los metodos del path about (get, put, post, etc.)
app.use(fn); // sin el path especificado, se usa de forma global, para todas las rutas.
app.use(express.urlencoded({ extended: true })); // este middleware urlencoded transforma el string del body selecionado como urlencoded en un objeto.
// En Postman, si elijimos el formato form-urlencoded, tenemos que usar este middleware, de forma global.
app.use(express.json()); // Para interpretar datos del body como raw: json

app.get('/', (req, res) => {
  // Validaciones - no hace falta por el uso de middlewares
  res.json('Home'); // En express, el res.json ya retorna el JSON.stringfy
});

// Variables en el path - params & query
// 1) Params - para prover rutas de forma dinamicas
app.get(
  '/user/:id',
  /* fnParaAbout, se podria usar inyectando la fn como parametro de get, en vez de app.use.
  En este caso, es aplicable solamente para el metodo que estás llamando, o sea en este caso,
  get. */
  (req, res) => {
    res.json({ message: 'Successfully request', id: req.params.id }); // En express, el res.json ya retorna el JSON.stringfy
  }
);
// 2) String Query - se puede usar para filtrar los datos
app.get(
  '/user',
  /* fnParaAbout, se podria usar inyectando la fn como parametro de get, en vez de app.use.
  En este caso, es aplicable solamente para el metodo que estás llamando, o sea en este caso,
  get. */
  (req, res) => {
    res.json({ ...req.query, message: 'Successful request' }); // En express, el res.json ya retorna el JSON.stringfy
  }
);

app.post('/user', (req, res) => {
  res.json(req.body);
});

app.listen(5000, () => {
  console.log('Server running on port 5000...');
});
