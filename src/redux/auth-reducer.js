import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
                ...action.payload,
                // isAuth: true
            }

        default:
            return state;
    }
}

export const authMeThunkCreator = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginMe(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authMeThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logoutMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export default authReducer;