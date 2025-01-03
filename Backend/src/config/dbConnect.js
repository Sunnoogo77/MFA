import {connect} from "mongoose";
export const dbConnect = async () => {
    try {
        const mongoDbConnection = await connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB connection SUCCESS : ${mongoDbConnection.connection.host}`);
    } catch (error) {
        console.log(`Database connection failed: ${error}`);
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
}

export default dbConnect;