import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
  if (isConnected) {
    console.log("Reusing existing MongoDB connection");
    return;
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    const connection = await mongoose.connect(process.env.mongoUrl);

    isConnected = connection.connections[0].readyState;
    console.log(`MongoDB connected @ ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDb;
