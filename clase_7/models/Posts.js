import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  userId: String,
});

const Post = mongoose.model('post', postSchema);

export default Post;
