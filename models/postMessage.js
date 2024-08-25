import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const userMessage = mongoose.model("userMessage", userSchema);

export default userMessage;
