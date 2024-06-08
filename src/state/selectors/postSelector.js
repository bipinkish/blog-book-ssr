export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const selectPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id === postId);

export const selectAllUsers = (state) => state.users.users || [];

