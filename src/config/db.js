import mongoose from 'mongoose'
import { DB_URL } from "./env.js";

const connectWithRetry = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to Mongodb...')
    } catch (error) {
        console.log(error);
        setTimeout(connectWithRetry, 5000);
    }
}

connectWithRetry();

export default mongoose;