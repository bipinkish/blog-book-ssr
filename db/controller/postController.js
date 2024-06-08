import Post from "../models/Post";

// Create a new post
export const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a post by postId
export const updatePost = async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate({ postId: req.params.postId }, req.body, { new: true, runValidators: true });
        if (!post) {
            return res.status(404).send();
        }
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a post by postId
export const deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ postId: req.params.postId });
        if (!post) {
            return res.status(404).send();
        }
        res.status(200).send(post);
    } catch (error) {
        res.status(500).send(error);
    }
};