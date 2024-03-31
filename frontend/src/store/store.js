import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
    session: sessionReducer
});

const configureStore = (initialState = {}) => (
    legacy_createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
)

export default configureStore