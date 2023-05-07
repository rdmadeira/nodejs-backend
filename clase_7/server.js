import express from 'express';
import { Post } from './routes/Posts.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

const server = express();

// Load ENV variables:
dotenv.config();

// Conect to Database:
connectDB();

server.use(express.json());
server.use('/post', Post);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Server running on port: ' + PORT));
