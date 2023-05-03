import { getPosts, createPost } from '../utils/posts_utils.js';
import { v4 as uuidv4 } from 'uuid';

export const userPostsGetHandler = (req, res) => {
  const posts = getPosts();
  const userPosts = posts.filter((post) => post.userId === req.params.userId);

  if (userPosts.length > 0) {
    res.status(200).json({
      status: 'success',
      data: userPosts,
      message: 'Successfully posts request',
    });
  } else {
    res.status(202).json({
      status: 'error',
      data: null,
      message: 'No user find!',
    });
  }
};

export const postsPostHandler = (req, res) => {
  const posts = getPosts();
  console.log(req.body);
  const { title, body, userId } = req.body;
  const newPost = { userId, title, body, id: uuidv4(), createdAt: new Date() };
  posts.push(newPost);
  createPost(posts);
  res.status(200).json({
    status: 'success',
    message: 'Succesfully created Post',
    data: newPost,
  });
};

export const postsGetHandler = (req, res) => {
  const posts = getPosts();

  res.status(200).json({
    status: 'success',
    data: posts,
    message: 'Successfully posts request',
  });
};
