import { deleteSession, postSession, postUser } from "../utils/sessionApiUtils";

//Types = what kind of modifications do I want to make to my state. (example: start session, delete session, create session)
export const CREATE_SESSION = 'session/CREATE_SESSION';
export const DESTROY_SESSION = 'session/DESTROY_SESSION';

//Action creators
export const createSession = sessionInfo => ({
    type: CREATE_SESSION,
    sessionInfo
});

export const destroySession = () => ({
    type: DESTROY_SESSION
})

//Thunk action creators = how would you like to interact with the server
export const createUser = userInfo => (dispatch, getState) => (
    postUser(userInfo)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data => {
            sessionStorage.setItem('currentUser', JSON.stringify(data.user))
            dispatch(createSession(data.user));
        })
);

export const loginUser = sessionInfo => (dispatch, getState) => (
    postSession(sessionInfo)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data => {
        sessionStorage.setItem('currentUser', JSON.stringify(data.user))
        dispatch(createSession(data.user));
    })
);

export const logoutUser = () => (dispatch, getState) => (
    deleteSession()
    .then(res => {
        if (res.ok) {
            sessionStorage.removeItem('currentUser');
            dispatch(destroySession())
        } else {
            throw res;
        }
    })
);

//Selectors
export const selectCurrentUser = state => state.session;

//Reducer
const initialState = JSON.parse(sessionStorage.getItem('currentUser'));

const sessionReducer = (state = initialState, action) => {
    const nextState = { ...state }

    switch(action.type){
        case CREATE_SESSION:
            return action.sessionInfo;
        case DESTROY_SESSION:
            return null;
        default:
            return state;
    }
}

export default sessionReducer;