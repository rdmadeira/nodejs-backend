import { v4 as uuidv4 } from 'uuid';
import { getComments, createComment } from '../utils/comment_utils.js';

export const getAllCommentsHandler = (req, res) => {
  const allCommentsObj = getComments();
  const allComments = Object.keys(allCommentsObj).flatMap((postId) => {
    return allCommentsObj[postId];
  });
  res.status(200).json({ data: allComments });
};

export const getPostCommentsHandler = (req, res) => {
  const postId = req.params.postId;
  const postComments = getComments()[postId];
  if (postComments) {
    res.status(200).json({
      data: JSON.stringify(postComments),
      message: 'Succesfully comments request',
      status: 'success',
    });
  } else {
    res
      .status(202)
      .json({ status: 'error', message: 'Cannot get comments', data: [] });
  }
};

export const createPostCommentHandler = (req, res) => {
  const postId = req.params.postId;
  const comments = getComments();
  const postComments = comments[postId] || [];
  const { name, lastname, email, body, userId } = req.body;

  const newComment = {
    name,
    lastname,
    email,
    body,
    userId,
    postId,
    id: uuidv4(),
    createdAt: new Date(),
  };
  postComments.push(newComment);

  createComment({ ...comments, [postId]: postComments });

  res.json({
    status: 'success',
    message: 'Comment succesfully created',
    data: newComment,
  });
};
