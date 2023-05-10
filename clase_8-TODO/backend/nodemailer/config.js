import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const rootPath = path.join(process.cwd(), 'backend/nodemailer/attachments');
const dotenvPath = path.join(process.cwd(), 'backend/.env');

console.log(process.cwd(), dotenvPath);

dotenv.config({ path: dotenvPath });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.P,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = (email, toDo) => {
  const sendMailOptions = {
    from: 'compras.costofinal@gmail.com',
    to: email,
    subject: 'Gracias por su pedido!!',
    html: '<h2>Pedido enviado con suceso</h2><p>Entraremos en contato en la brevedad para seguir los próximos pasos</p>',
    text: 'Pedido enviado con suceso. Entraremos en contato en la brevedad para seguir los próximos pasos',
    attachments: [
      {
        filename: toDo.title.concat('.txt'),
        path: path.join(rootPath, toDo.title + '.txt'),
      },
    ],
  };
  transporter.sendMail(sendMailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      fs.unlink(path.join(rootPath, toDo.title + '.txt'), (unlinkError) => {
        console.log(unlinkError);
        if (unlinkError) {
          console.log('No se pudo borrar el archivo - error al borrar');
        } else {
          console.log(info.response);
        }
      });
    }
  });
};

const toDo = {
  title: 'Hacer ejercicio',
  description: 'Todos los lunes!!!',
};

export const createFile = (toDo) => {
  console.log(rootPath);
  const filePath = path.join(rootPath, toDo.title + '.txt');
  const data = `
  Tarea programada: ${toDo.title};\n
  Descripción: ${toDo.description};\n
  Creado el: ${toDo.createdAt}`;
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Archivo creado con sucesso!!');
      sendEmail('rdmadeira2@gmail.com', toDo);
      return;
    }
  });
};

createFile(toDo);
