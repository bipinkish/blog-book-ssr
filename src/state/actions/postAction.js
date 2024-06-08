import axios from 'axios';
import { sub } from 'date-fns';
import { call, put } from 'redux-saga/effects';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const FETCH_POSTS_PENDING = 'posts/fetchPostsPending';
export const FETCH_POSTS_FULFILLED = 'posts/fetchPostsFulfilled';
export const FETCH_POSTS_REJECTED = 'posts/fetchPostsRejected';

export const ADD_NEW_POST_FULFILLED = 'posts/addNewPostFulfilled';
export const UPDATE_POST_FULFILLED = 'posts/updatePostFulfilled';
export const DELETE_POST_FULFILLED = 'posts/deletePostFulfilled';

export const REACTION_ADDED = 'posts/reactionAdded';

export const fetchPosts = () => ({
    type: FETCH_POSTS_PENDING,
});

export const fetchPostsFulfilled = (posts) => ({
    type: FETCH_POSTS_FULFILLED,
    payload: posts,
});

export const fetchPostsRejected = (error) => ({
    type: FETCH_POSTS_REJECTED,
    error,
});

export const addNewPostFulfilled = (post) => ({
    type: ADD_NEW_POST_FULFILLED,
    payload: post,
});

export const updatePostFulfilled = (post) => ({
    type: UPDATE_POST_FULFILLED,
    payload: post,
});

export const deletePostFulfilled = (post) => ({
    type: DELETE_POST_FULFILLED,
    payload: post,
});

export const reactionAdded = (postId, reaction) => ({
    type: REACTION_ADDED,
    payload: { postId, reaction },
});

export function* fetchPostData() {
    try {
        let res = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
        yield put({
            type: "SET_POST_DATA",
            payload: res.data,
        });
    } catch (error) {
        // Dispatch the failure action with the error message
    }
}
// export const fetchPostsAsync = () => async (dispatch) => {
//     dispatch(fetchPosts());
//     try {
//         const response = await axios.get(POSTS_URL);
//         const data = response.data;
//         let min = 1;
//         const loadedPosts = data.map((post) => ({
//             ...post,
//             date: sub(new Date(), { minutes: min++ }).toISOString(),
//             reactions: {
//                 thumbsUp: 0,
//                 wow: 0,
//                 heart: 0,
//                 rocket: 0,
//                 coffee: 0,
//             },
//         }));
//         dispatch(fetchPostsFulfilled(loadedPosts));
//     } catch (error) {
//         dispatch(fetchPostsRejected(error.message));
//     }
// };

// export const addNewPostAsync = (initialPost) => async (dispatch, getState) => {
//     try {
//         const response = await axios.post(POSTS_URL, initialPost);
//         const sortedPosts = getState().postsReducer.posts.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
//         const newPost = {
//             ...response.data,
//             id: sortedPosts[sortedPosts.length - 1].id + 1,
//             userId: parseInt(response.data.userId),
//             date: new Date().toISOString(),
//             reactions: {
//                 thumbsUp: 0,
//                 wow: 0,
//                 heart: 0,
//                 rocket: 0,
//                 coffee: 0,
//             },
//         };
//         dispatch(addNewPostFulfilled(newPost));
//     } catch (error) {
//         console.error(error.message);
//     }
// };

// export const updatePostAsync = (initialPost) => async (dispatch) => {
//     const { id } = initialPost;
//     try {
//         const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
//         const updatedPost = { ...response.data, date: new Date().toISOString() };
//         dispatch(updatePostFulfilled(updatedPost));
//     } catch (error) {
//         console.error(error.message);
//     }
// };

// export const deletePostAsync = (post) => async (dispatch) => {
//     const postId = post.id;
//     try {
//         const response = await axios.delete(`${POSTS_URL}/${postId}`);
//         if (response.status === 200) {
//             dispatch(deletePostFulfilled(post));
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// };
