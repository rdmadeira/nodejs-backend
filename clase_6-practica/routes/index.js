import express from 'express';
import path from 'path';
import { __dirname } from '../paths.js';
import { getUsers, saveUsers } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '//pages//index.html'));
});

router.post('/', (req, res) => {
  const newUser = { ...req.body, id: uuidv4() };
  const users = getUsers();

  if (!users.find((user) => user.email === newUser.email)) {
    users.push(newUser);
    console.log(users);
    saveUsers(users);
    res.send('User registered Successfully');
  } else {
    res.send('Email already registered!');
  }
});

export default router;
