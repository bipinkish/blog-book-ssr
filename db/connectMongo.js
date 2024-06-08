import mongoose from "mongoose";

const uri = "mongodb+srv://root:root@democluster.uyntjm7.mongodb.net/blogdb?retryWrites=true&w=majority&appName=DemoCluster";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const connectMongo = async () => {
    try {
        await mongoose.connect(uri, clientOptions)
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.log("Error : ", err);
    }

}

export default connectMongo