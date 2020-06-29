import React from "react";
import Song from "./Song";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import style from "./Music.module.css";
import Button from '@material-ui/core/Button';



const SongArtist = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.searchByArtistForm}>
            <Field
                className={style.input}
                placeholder="Enter artist"
                name="artist"
                component={Input}
                validate={requiredField}
            />
            <Button variant="contained" color="primary" type="submit"
                className={style.btn}>Get songs</Button>
        </form>
    )
}

const ReduxSongArtist = reduxForm({form: 'newSearchByArtist'})(SongArtist);

const  Music = (props) => {
    const getSongsByArtist = (values) => {
        props.setArtist(values.artist);
        props.requestSongs(values.artist);
    }

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Find songs by author</h3>
            <ReduxSongArtist onSubmit={getSongsByArtist}/>
            {props.songs.map(song => <Song song={song}/>)}
        </div>
    );
};

export default Music;
