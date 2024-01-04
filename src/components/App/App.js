import React, { useState } from "react";
import styles from "./App.module.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import { Spotify } from "../../util/Spotify";

function App () {

  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Song Name",
      artist: "Example Artist Name",
      album: "Example Album Name",
      id: 1
    },
    {
      name: "Example Song Name 2",
      artist: "Example Artist Name 2",
      album: "Example Album Name 2",
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

  function addTrack(track) {
    const existingTrack = playlistTracks.find((tr) => tr.id === track.id);
    const newTrack = playlistTracks.concat(track);

    if(existingTrack) {
      console.log("That track already exists.");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((tr) => tr.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs)
      .then(() => {
        updatePlaylistName("New Playlist");
        setPlaylistTracks([]);
    });
  }

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  }

  return (
      <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar 
          onSearch={search}
        />

        <div className={styles["App-playlist"]}>
          <SearchResults
            userSearchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
      );
}

export default App;
