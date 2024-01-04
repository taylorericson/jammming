import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist(props) {

    function handleNameChange({ target }) {
        props.onNameChange(target.value);
    }

  return (
    <div className={styles.Playlist}>
        <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
        <TrackList
            playlistName={props.playlistName}
            userSearchResults={props.playlistTracks}
            onRemove={props.onRemove}
            isRemoval={true}
        />
        <button className={styles["Playlist-save"]} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;