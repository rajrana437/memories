import express, { Router } from 'express';
const router = express.Router();
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
//localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //update data
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
