import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hassan:ha04ah06@cluster2.qglfsol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Mongo SuccessFully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
