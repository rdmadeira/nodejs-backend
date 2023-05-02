import fs from 'fs';
import { __dirname } from '../paths.js';

const usersJsonPath = __dirname + 'data/users.json';

export const saveUsers = (updatedUsers) => {
  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsers));
  return;
};

export const getUsers = () => {
  try {
    return JSON.parse(fs.readFileSync(usersJsonPath));
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    } else {
      console.log('Ocurrió un error inesperado!');
    }
  }
};
