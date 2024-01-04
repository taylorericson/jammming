let accessToken = "";
const clientID = "6100d0eec55f4ce0842fa5349f3913be";
const redirectUrl = "http://localhost:3000";

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

};

export { Spotify };