import mongoose from 'mongoose';

const hireTalentSchema = new mongoose.Schema({

    companyName : {
        type: String,
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
    },

    experience: {
        type: String,
    },

    location: {
        type: String,
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