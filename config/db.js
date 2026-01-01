import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_uri);
        console.log("database connected");
    } catch (error) {
        console.log(error);
        console.log("connection conected failed at database");
        process.exit(1);
    }
};

export default connectDb;