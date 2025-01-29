import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        console.log('attempting to connect to mongodb');
        console.log('mongodb url:', process.env.mongoUrl);
        const connection = await mongoose.connect(process.env.mongoUrl);
        console.log(`mongoose connection established @${connection.connection.host}`);
    } catch (error) {
        console.error('mongodb connection error:',  error)
        process.exit(1)
    }
}

export default connectDb