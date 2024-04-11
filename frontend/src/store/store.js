import { thunk } from 'redux-thunk'
// import logger from 'redux-logger'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import sessionReducer from './sessionReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    product: productReducer
});

const configureStore = (initialState = {}) => (
    legacy_createStore(rootReducer, initialState, applyMiddleware(thunk))
)

export default configureStore
