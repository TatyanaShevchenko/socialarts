import {musicAPI, usersAPI} from "../api/api";


const SET_SONGS = 'social-arts/music/SET-SONGS';
const SET_ARTIST = 'social-arts/music/SET-ARTIST';



let initialState = {
    artist: null,
    songs: []
};

const songsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SONGS:
            return {...state, songs: [...action.songs]}
        case SET_ARTIST:
            return {...state, artist: action.artist}

        default:
            return state;
    }
}


export const setSongs = (songs) => ({type: SET_SONGS, songs});
export const setArtist = (artist) => ({type: SET_ARTIST, artist});

export const requestSongs = (artist) => {
    return async (dispatch) => {
        let data = await musicAPI.getSongsByArtist(artist)
        dispatch(setSongs(data.data));
    }
}


export default songsReducer;