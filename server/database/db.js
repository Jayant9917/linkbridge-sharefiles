import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const MONGO_URI = process.env.MONGODB_URI;
    
    if (!MONGO_URI) {
        console.error('MongoDB URI is not defined in environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database:', error.message);
        process.exit(1);
    }
}

export default DBConnection;

//1234567890