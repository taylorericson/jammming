import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
        <input defaultValue={"New Playlist"} />
        <TrackList
            playlistName={props.playlistName}
            userSearchResults={props.playlistTracks}
        />
        {/* <TrackList /> */}
        <button className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;