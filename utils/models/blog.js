import mongoose from 'mongoose';

const blogSchema = await new mongoose.Schema({

    blogTitle: {
        type: String,
        required: true,
    },

    blogBody: {
        type: String,
        required: true
    },

    blogImage: {
        type: String,
        required: true
    },

    blogPhoto: {
        type: String,
        required: true
    },

    blogAuthor: {
        type: String,
        required: true
    },

    blogReadTime: {
        type: String,
        required: true
    },

    createdAt: {
        type: String
    },

    updatedAt: {
        type: String
    }
})

const blog = mongoose.models.blog || mongoose.model('blog', blogSchema)

export default blog;