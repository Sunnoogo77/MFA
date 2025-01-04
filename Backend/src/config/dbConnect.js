import {connect} from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
export const dbConnect = async () => {
    try {
        const connectionString = "mongodb+srv://tapsobascaleb:zsQmR6uysgHFFFTB@2fa-cluster.fqmrt.mongodb.net/?retryWrites=true&w=majority&appName=2fa-cluster";
        
        if (!connectionString) {
            throw new Error('CONNECTION_STRING environment variable is not defined');
        }
        const mongoDbConnection = await connect(connectionString);
        if (!mongoDbConnection) {
            throw new Error('CONNECTION_STRING environment variable is not defined');
        }
        console.log(`MongoDB connection SUCCESS : ${mongoDbConnection.connection.host}`);
    } catch (error) {
        console.log(`Database connection failed: ${error}`);
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
}

export default dbConnect;

