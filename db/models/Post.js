import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    postId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

export default Post;
