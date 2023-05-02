import fs from 'fs';
import path from 'path';
import { __dirname } from '../paths.js';

const postsPath = path.join(__dirname, 'data/posts.json');

export const getPosts = () => {
  try {
    const posts = JSON.parse(fs.readFileSync(postsPath));
    return posts;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const createPost = (posts) => {
  fs.writeFileSync(postsPath, JSON.stringify(posts));
  return;
};
