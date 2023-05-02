import express from 'express';
import path from 'path';
import { __dirname } from '../paths.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '//pages//index.html'));
});

export default router;
