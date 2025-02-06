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
