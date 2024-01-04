import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist (props) {
    return (
        <div className={styles.Tracklist}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {props.userSearchResults.map((track) => (
            <Track
                key={track.id}
                track={track}
                onAdd={props.onAdd}
            />
        )
        )}
      </div>
    );
}

export default Tracklist;