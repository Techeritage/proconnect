import mongoose from "mongoose";

const postJobsSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },

  jobTitle: {
    type: String,
    required: true,
  },

  jobDescription: {
    type: String,
    required: true,
  },

  requiredSkills: {
    type: [String],
    required: true,
  },

  experience: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  createdAt: {
    type: String,
  },

  updatedAt: {
    type: String,
  },
});

const postJobs =
  mongoose.models.postJobs || mongoose.model("postJobs", postJobsSchema);

export default postJobs;
