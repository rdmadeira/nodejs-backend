import express from 'express';
import { getContacts, saveContacts } from './utils/utils.js';

// Router es una clase:
const router = express.Router();

router.post('/', (req, res) => {
  const { name, lastname, phone } = req.body;
  const contacts = getContacts();
  const key = name + ' ' + lastname;
  contacts[key] = { name, lastname, phone };
  saveContacts(contacts);
  res.json({
    data: contacts[key],
    message: res.statusMessage || 'successfully send',
    code: res.statusCode,
  });
});

router.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Post</title>
  </head>
  <body>
    <form method="post">
      <input name="name" id="name" placeholder="name" />
      <input name="lastname" id="lastname" placeholder="lastname" />
      <input name="phone" id="phone" placeholder="phone" type="tel" />
      <button type="submit">Send</button>
    </form>
  </body>
</html>
`);
});

export default router;
