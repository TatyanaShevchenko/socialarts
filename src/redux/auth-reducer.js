import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-arts/auth/SET-USER-DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const authMeThunkCreator = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.loginMe(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(authMeThunkCreator())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}


export const logoutThunkCreator = () => {
    return async (dispatch) => {
        const data = await authAPI.logoutMe()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export default authReducer;