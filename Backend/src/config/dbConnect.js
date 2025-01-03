import {connevt} from 'mongoose';
const dbConnect = async () => {
    try {
        const mongoDBConnection = await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    } catch (error) {
        console.log(`Database connection failed: ${error}`);
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
}