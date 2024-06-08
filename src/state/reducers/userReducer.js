import { FETCH_USERS_FULFILLED, FETCH_USERS_PENDING, FETCH_USERS_REJECTED } from "../actions/userAction";


const initialState = {
    users: [],
    status: 'idle',
    error: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS_DATA": {
            return { ...state, users: action.payload }
        }
        case FETCH_USERS_PENDING:
            return { ...state, status: 'loading' };
        case FETCH_USERS_FULFILLED:
            return { ...state, status: 'succeeded', users: action.payload };
        case FETCH_USERS_REJECTED:
            return { ...state, status: 'failed', error: action.error };
        default:
            return state;
    }
};

export default usersReducer;
