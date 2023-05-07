import Post from '../models/Posts.js';

export const getPostsHandler = async (req, res) => {
  const posts = await Post.find();

  res
    .status(200)
    .json({ data: posts, message: 'Todos los Posts getted con exito' });
};

export const createPostHandler = async (req, res) => {
  const { userId, description, title } = req.body;

  const newPost = await Post.create({ userId, description, title });

  res.status(200).json({ data: newPost, message: 'Post creado con exito' });
};
