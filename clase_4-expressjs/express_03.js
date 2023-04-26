import express from 'express';

const app = express();

//app.use() corre para todas las rutas:
app.use(express.static('public'));

app.all('/*'); // Para cualquier ruta, se direcciona a la carpeta public, o sea, nuestro frontend.

app.listen(5000, () => {
  console.log('Server running on port 5000...');
});
