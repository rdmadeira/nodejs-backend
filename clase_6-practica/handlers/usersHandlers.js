import { getUsers, saveUsers } from '../utils/users_utils.js';
import { v4 as uuidv4 } from 'uuid';

export const usersGetHandler = (req, res) => {
  const users = getUsers();
  res.status(200).json({
    data: users,
    message: 'Successfully fetched Users',
    status: 'success',
  });
};

export const usersPostHandler = (req, res) => {
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
};

export const userGetHandler = (req, res, next) => {
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
};
export const userGetDinamicHandler = (req, res, next) => {
  const users = getUsers();
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (user) {
    res
      .status(200)
      .json({ message: 'User finded!', data: user, status: 'success' });
  } else {
    res
      .status(202)
      .json({ message: 'No user finded', data: null, status: 'error' });
    next();
  }
};
