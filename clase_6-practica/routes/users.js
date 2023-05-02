import express from 'express';
import path from 'path';
import { __dirname } from '../paths.js';
import { getUsers, saveUsers } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', (req, res) => {
  const users = getUsers();
  res.status(200).json({
    data: users,
    message: 'Successfully fetched Users',
    status: 'success',
  });
});

router.post('/', (req, res) => {
  const newUser = { ...req.body, id: uuidv4() };
  const users = getUsers();

  if (!users.find((user) => user.email === newUser.email)) {
    users.push(newUser);
    saveUsers(users);
    res.status(200).json({
      message: 'User registered Successfully',
      data: newUser,
      status: 'success',
    });
  } else {
    res.status(202).json({
      message: 'Email already registered!',
      status: 'error',
      data: null,
    });
  }
});

router.post('/user', (req, res, next) => {
  const userEmail = req.body.email;
  const users = getUsers();
  const user = users.find((us) => us.email === userEmail);

  if (user) {
    res
      .status(200)
      .json({ message: 'User finded!', data: user, status: 'success' });
  } else {
    res
      .status(202)
      .json({ message: 'No user finded', data: null, status: 'error' });
  }
});

export default router;
