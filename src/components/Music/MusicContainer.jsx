import React, {Component} from "react";
import {connect} from "react-redux";
import Music from "./Music";
import {requestSongs, setArtist} from "../../redux/music-reducer";


class MusicContainer extends Component {

    componentDidMount() {
       // this.props.requestSongs("eminem");
    }

    render() {
        return <Music artist={this.props.artist}
                      songs={this.props.songs}
                      requestSongs={this.props.requestSongs}
                      setArtist={this.props.setArtist}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        artist: state.musicPage.artist,
        songs: state.musicPage.songs
    }
};

export default connect(mapStateToProps, {requestSongs, setArtist})
(MusicContainer);
