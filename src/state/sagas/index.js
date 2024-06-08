import { all, fork } from "redux-saga/effects";
import { watchPostDataApi, watchUsersDataApi } from "./postSaga";

export default function* combinedSaga() {
    yield all([
        fork(watchPostDataApi),
        fork(watchUsersDataApi)
    ])
}