import express from "express";
import { createPost, getPost } from "../controllers/post.js";
const router = express.Router();

//http://localhost:5000/post
router.get("/", getPost);
router.post("/", createPost);

export default router;
