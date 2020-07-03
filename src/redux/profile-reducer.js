import {profileAPI} from "../api/api";

const ADD_POST = 'social-arts/profile/ADD-POST';
const DELETE_POST = 'social-arts/profile/DELETE-POST';
const SET_USER_PROFILE = 'social-arts/profile/SET-USER-PROFILE';
const SET_STATUS = 'social-arts/profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS ='social-arts/profile/SAVE-PHOTO-SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 15},
        {id: 2, message: 'Ololo trololo', likesCount: 22},
        {id: 3, message: 'Hi! How are you?', likesCount: 35},
        {id: 4, message: 'React', likesCount: 100500},
        {id: 5, message: 'Ahahahaa', likesCount: 33},
        {id: 6, message: "Super message", likesCount: 14}
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
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id != action.postId)]
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos:action.photos}
            }

        default:
            return state;
    }
};

//action creators

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody: newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

//thunk creators

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export default profileReducer;