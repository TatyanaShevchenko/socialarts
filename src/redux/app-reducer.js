import {authMeThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'social-arts/app/INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) =>
{
   let promise = dispatch(authMeThunkCreator());
    await Promise.all([promise]);
    dispatch(initializedSuccess());
}

export default appReducer;