import mongoose from "mongoose";

const blogSchema = await new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true,
  },

  blogBody: {
    type: String,
    required: true,
  },

  thumbNail: {
    type: String,
  },

  excerpt: {
    type: String,
  },

  blogReadTime: {
    type: String,
  },

  createdAt: {
    type: String,
  },

  updatedAt: {
    type: String,
  },
});

const blog = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default blog;
