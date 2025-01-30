import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema({

    fullName: {
        type: String,
        require: ["Put in your full name"],
    },

    email: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true
    },

    jobTitle: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    cv: {
        type: String,
        required: true
    },

    createdAt: {
        type: String
    }
})

const cvUpload = mongoose.models.cvUpload || mongoose.model('cvUpload', cvSchema);

export default cvUpload;