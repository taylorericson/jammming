import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist (props) {
    return (
        <div className={styles.Tracklist}>
        {props.userSearchResults.map((track) => (
            <Track
                key={track.id}
                track={track}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isRemoval={props.isRemoval}
            />
        )
        )}
      </div>
    );
}

export default Tracklist;