import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true,
    },

    messageUs: {
        type: String,
        required: true
    },

    createdAt: {
        type: String
    }

})

const contactUs = mongoose.models.contactUs || mongoose.model('contactUs', contactSchema)

export default contactUs