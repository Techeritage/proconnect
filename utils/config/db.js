import mongoose from "mongoose";

// MongoDB connection string
const mongoURI = process.env.mongoUrl || "";

// Function to connect to MongoDB
const connectToMongoDB = async () => {
  try {
    // Connect to MongoDB without the deprecated options
    await mongoose.connect(mongoURI, {
      // Add any required connection options here
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export async function connectDb() {
  if (mongoose.connection.readyState === 0) {
    await connectToMongoDB();
  }
}
