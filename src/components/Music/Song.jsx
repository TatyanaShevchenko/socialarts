import React from "react";
import style from "./Music.module.css";
import {NavLink} from "react-router-dom";



const Song = ({song, ...props}) => {

  return (
      <div className={style.songBox}>
        <img  className={style.image}
            src={song.album.cover_small}></img>
        <a className={style.link}
            target="_blank"
            href={song.link}>{song.title}
        </a>
        <p>by {song.artist.name}</p>

      </div>
  );
};

export default Song;
