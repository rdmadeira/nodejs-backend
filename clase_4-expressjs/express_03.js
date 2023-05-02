import express from 'express';
//install dotenv:
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//app.use() corre para todas las rutas:
app.use(express.static('public')); // - terminó acá...

app.all('/*'); // Para cualquier ruta, se direcciona a la carpeta public, o sea, nuestro frontend.

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
