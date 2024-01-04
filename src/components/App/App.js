import React, { useState, useCallback } from "react";
import styles from "./App.module.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

function App () {

  const [searchResults, setSearchResults] = useState([
    {
      name: "Pink Venom",
      artist: "Black Pink",
      album: "Born Pink",
      id: 1
    },
    {
      name: "Wellerman",
      artist: "Nathan Evans",
      album: "Sea Shanties",
      id: 2
    }
  ]);

  const [playlistName, setPlaylistName] = useState("Example Playlist Name");

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 11,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 22,
    },
    {
      name: "Example Playlist Name 3",
      artist: "Example Playlist Artist 3",
      album: "Example Playlist Album 3",
      id: 33,
    },
  ]);

  return (
      <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar />

        <div className={styles["App-playlist"]}>
          <SearchResults userSearchResults={searchResults}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
      );
}

export default App;
