import express from 'express';

// Router es una clase:
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'successful request' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'successful request' });
});

export default router;
