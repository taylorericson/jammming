import React from "react";
import styles from "./Track.module.css";

function Track (props) {

    function passTrack() {
        props.onAdd(props.track);
    }

    return (
      <div className={styles.Track}>
        <div className={styles["Track-information"]}>
            <h3>{props.track.name}</h3>
            <p>
                {props.track.artist} | {props.track.album}
            </p>
        </div>
        <button className={styles["Track-action"]} onClick={passTrack}>+</button> 
      </div>
    );
}

export default Track;