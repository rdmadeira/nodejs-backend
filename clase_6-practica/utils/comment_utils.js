import fs from 'fs';
import path from 'path';
import { __dirname } from '../paths.js';

const commentsPath = path.join(__dirname, 'data/comments.json');

export const getComments = () => {
  try {
    const comments = JSON.parse(fs.readFileSync(commentsPath));
    return comments;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const createComment = (comments) => {
  fs.writeFileSync(commentsPath, JSON.stringify(comments));
  return;
};
