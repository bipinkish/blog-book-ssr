import {
    FETCH_POSTS_PENDING,
    FETCH_POSTS_FULFILLED,
    FETCH_POSTS_REJECTED,
    ADD_NEW_POST_FULFILLED,
    UPDATE_POST_FULFILLED,
    DELETE_POST_FULFILLED,
    REACTION_ADDED,
} from '../actions/postAction';

const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POST_DATA":
            return { ...state, posts: action.payload }
        case FETCH_POSTS_PENDING:
            return { ...state, status: 'loading' };
        case FETCH_POSTS_FULFILLED:
            return {
                ...state,
                status: 'succeeded',
                posts: state.posts.concat(action.payload),
            };
        case FETCH_POSTS_REJECTED:
            return { ...state, status: 'failed', error: action.error };
        case ADD_NEW_POST_FULFILLED:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE_POST_FULFILLED:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post,
                ),
            };
        case DELETE_POST_FULFILLED:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload.id),
            };
        case REACTION_ADDED:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.postId
                        ? {
                            ...post,
                            reactions: {
                                ...post.reactions,
                                [action.payload.reaction]: post.reactions[action.payload.reaction] + 1,
                            },
                        }
                        : post,
                ),
            };
        default:
            return state;
    }
};

export default postsReducer;
