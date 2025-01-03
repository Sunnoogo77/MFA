import {connect} from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const dbConnect = async () => {
    try {
        const connectionString = process.env.CONNECTION_STRING;
        if (!connectionString) {
            throw new Error('CONNECTION_STRING environment variable is not defined');
        }
        const mongoDbConnection = await connect(connectionString);
        console.log(`MongoDB connection SUCCESS : ${mongoDbConnection.connection.host}`);
    } catch (error) {
        console.log(`Database connection failed: ${error}`);
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
}

export default dbConnect;

