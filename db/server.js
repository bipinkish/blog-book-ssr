import express from "express";
import bodyParser from "body-parser";
import connectMongo from "./connectMongo.js"; // Your connection file
import { createPost, getPosts, updatePost, deletePost } from "./controller/postController.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Connect to MongoDB
connectMongo();

// Routes
app.post('/posts', createPost);
app.get('/posts', getPosts);
app.patch('/posts/:postId', updatePost);
app.delete('/posts/:postId', deletePost);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});