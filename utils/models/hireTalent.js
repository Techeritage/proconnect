import mongoose from 'mongoose';

const hireTalentSchema = new mongoose.Schema({

    companyName : {
        type: String,
        required: true,
    },

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
        required: true
    },

    jobTitle: {
        type: String,
        required: true
    },

    jobDescription: {
        type: String,
        required: true
    },

    requiredSkills: {
        type: [String],
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['Pending', 'Resolved', 'Cancel'],
        default: 'Pending'
    },

    createdAt: {
        type: String
    },

    updatedAt: {
        type: String
    }
})

const hireTalent = mongoose.models.hireTalent || mongoose.model('hireTalent', hireTalentSchema)

export default hireTalent;  