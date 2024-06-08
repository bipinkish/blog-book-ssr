import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Correctly import thunk
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import combinedSaga from './state/sagas';
import postsReducer from './state/reducers/postReducer';
import usersReducer from './state/reducers/userReducer';


const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
});

const configureStore = initState => {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [thunk, logger, sagaMiddleware];
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))
    sagaMiddleware.run(combinedSaga)
    return store;
}

export default configureStore()
