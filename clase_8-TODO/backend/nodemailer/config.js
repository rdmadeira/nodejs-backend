import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'compras.costofinal@gmail.com',
    pass: 'rtwfstqdajegaufq',
  },
});

export const sendEmail = (email, orderId) => {
  const sendMailOptions = {
    from: 'compras.costofinal@gmail.com',
    to: email,
    subject: 'Gracias por su pedido!!',
    html: '<h2>Pedido enviado con suceso</h2><p>Entraremos en contato en la brevedad para seguir los próximos pasos</p>',
    text: 'Pedido enviado con suceso. Entraremos en contato en la brevedad para seguir los próximos pasos',
    attachments: [
      {
        filename: orderId.concat('.txt'),
        path: './backend/nodemailer/attachments/neworder.txt',
      },
    ],
  };
  transporter.sendMail(sendMailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(info.response);
    }
  });
};

sendEmail('rdmadeira2@gmail.com', 'myattachments');
