import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        { id: 1, message: "It's my first post", likesCount: 15 },
        { id: 2, message: 'Ololo trololo', likesCount: 22 },
        { id: 3, message: 'Hi! How are you?', likesCount: 35 },
        { id: 4, message: 'React', likesCount: 100500 },
        { id: 5, message: 'Ahahahaa', likesCount: 33 },
        { id: 6, message: "Super message", likesCount: 14 }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: action.newPostBody,
                    likesCount: 0
                }]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};

//action creators

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody:newPostBody });
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
});

//thunk creators

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}

export default profileReducer;