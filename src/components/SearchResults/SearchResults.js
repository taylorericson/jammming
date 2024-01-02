import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";
import Track from "../Track/Track";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
            {props.userSearchResults.map((track) => (
            <>
            <h3>{track.name}</h3><p>{track.artist} | {track.album}</p>
            </>
            ))}
            
        </div>
    );
}

export default SearchResults;