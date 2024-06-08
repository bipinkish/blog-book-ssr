import axios from 'axios';
import { call, put } from 'redux-saga/effects';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const FETCH_USERS_PENDING = 'users/fetchUsersPending';
export const FETCH_USERS_FULFILLED = 'users/fetchUsersFulfilled';
export const FETCH_USERS_REJECTED = 'users/fetchUsersRejected';

export const fetchUsers = () => ({
    type: FETCH_USERS_PENDING,
});

export const fetchUsersFulfilled = (users) => ({
    type: FETCH_USERS_FULFILLED,
    payload: users,
});

export const fetchUsersRejected = (error) => ({
    type: FETCH_USERS_REJECTED,
    error,
});

export const fetchUsersAsync = () => async (dispatch) => {
    dispatch(fetchUsers());
    try {
        const response = await axios.get(USERS_URL);
        dispatch(fetchUsersFulfilled(response.data));
    } catch (error) {
        dispatch(fetchUsersRejected(error.message));
    }
};

export function* fetchUsersData() {
    try {
        let res = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
        yield put({
            type: "SET_USERS_DATA",
            payload: res.data,
        });
    } catch (error) {
        // Dispatch the failure action with the error message
    }
}
