import { takeLeading } from "redux-saga/effects";
import { fetchPostData } from "../actions/postAction";
import { fetchUsersData } from "../actions/userAction";

export function* watchPostDataApi() {
    yield takeLeading(["FETCH_POST_DATA"], fetchPostData);
}

export function* watchUsersDataApi() {
    yield takeLeading(["FETCH_USERS_DATA"], fetchUsersData);
}