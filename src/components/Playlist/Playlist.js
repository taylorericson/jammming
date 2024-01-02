import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css";

function Playlist() {
  return (
    <div className={styles.Playlist}>
        <input defaultValue={"New Playlist"} />
        <TrackList />
        <button className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;