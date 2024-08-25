import userMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    const getPostMessage = await userMessage.find();
    console.log(getPostMessage);
    res.status(200).json(getPostMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new userMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
