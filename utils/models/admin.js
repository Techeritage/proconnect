import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ['Super Admin', 'Employee Admin'],
        required: true
    },

    name: {
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


const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema)

export default Admin;