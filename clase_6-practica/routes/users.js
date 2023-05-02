import express from 'express';
import path from 'path';
import { __dirname } from '../paths.js';
import { getUsers } from '../utils/utils.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/users.html'));
});

router.post('/', (req, res, next) => {
  const userEmail = req.body.email;
  const users = getUsers();
  const user = users.find((us) => us.email === userEmail);

  if (user) {
    res
      .status(200)
      .json({ message: 'User finded!', data: user, status: 'success' });
  } else {
    res
      .status(204)
      .json({ message: 'No user finded', data: null, status: 'error' });
  }
});

export default router;
