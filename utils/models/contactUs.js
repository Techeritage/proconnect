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

    status: {
        type: String,
        enum: ['Pending', 'Resolved', 'Cancel'],
        default: 'Pending'
    },

    messageUs: {
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

const contactUs = mongoose.models.contactUs || mongoose.model('contactUs', contactSchema)

export default contactUs