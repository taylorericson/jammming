let accessToken = "";
const clientID = "6100d0eec55f4ce0842fa5349f3913be";
const redirectUrl = "https://tericson-jammming.netlify.app/";

const Spotify = {
    getAccessToken() {
        //check for access token
        if(accessToken) {
            return accessToken;
        }
        
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expirationTime = window.location.href.match(/expires_in=([^&]*)/);

        if(tokenInURL && expirationTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expirationTime[1]);

            //set the access token to expire at expiration time
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            //clear the url after the access token expires 
            window.history.pushState("Access token", null, "/");
            return accessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
            if(!jsonResponse) {
                console.error("Response error");
            }
            return jsonResponse.tracks.items.map((tr) => ({
                id: tr.id,
                name: tr.name,
                artist: tr.artists[0].name,
                album: tr.album.name,
                uri: tr.uri,
            }));
        });
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${accessToken}` };
        let userId;

        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
          .then((response) => response.json())
          .then((jsonResponse) => {
            userId = jsonResponse.id;
            let playlistId;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
              headers: header,
              method: "post",
              body: JSON.stringify({ name: name }),
            })
              .then((response) => response.json())
              .then((jsonResponse) => {
                playlistId = jsonResponse.id;
                return fetch(
                  `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                  {
                    headers: header,
                    method: "post",
                    body: JSON.stringify({ uris: trackUris }),
                  }
                );
              });
          });
      },
};

export { Spotify };