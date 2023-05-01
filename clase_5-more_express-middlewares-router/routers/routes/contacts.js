import express from 'express';
import { getContacts, saveContacts } from './utils/utils.js';

// Router es una clase:
const router = express.Router();

router.get('/', (req, res) => {
  const contacts = getContacts();
  res.json(contacts);
});

router.get('/:name', (req, res) => {
  const contacts = getContacts();
  res.json(contacts[req.params.name]);
});

router.post('/', (req, res) => {
  const { name, lastname, phone } = req.body;
  const contacts = getContacts();
  const key = name + ' ' + lastname;
  contacts[key] = { name, lastname, phone };
  saveContacts(contacts);
  res.json({ message: 'successful created - contact', data: contacts[key] });
});

export default router;
