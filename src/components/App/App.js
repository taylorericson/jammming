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
      album: "Born Pink"
    }
  ]);

  return (
      <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar />
        
        <div className="App-playlist">
          <SearchResults userSearchResults={searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
      );
}

export default App;
