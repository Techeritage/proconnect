import mongoose from 'mongoose';

const newsLetterSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    suscribed: {
        type: Boolean,
        default: true
    },

    suscribedAt: {
        type: String
    },

    unsuscribedAt: {
        type: String
    }
})

const newsLetter = mongoose.models.newsLetter || mongoose.model('newsLetter', newsLetterSchema)

export default newsLetter;