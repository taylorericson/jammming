# Jammming

Jammming is a React-based web application that leverages the Spotify API to enable users to search for songs by various attributes, view detailed information about these songs, and export custom playlists directly to their personal Spotify accounts.

## Features

- **Song Search:** Users can search for songs by title, artist name, or album.
- **Detailed Song Information:** Displays information such as song title, artist, and album.
- **Playlist Export:** Users can create custom playlists and export them directly to their Spotify accounts.
- **User Authentication:** Securely authenticate users via Spotify's authentication mechanism.

## Technologies Used

- **HTML/CSS/JavaScript:** For building the front-end.
- **React:** To create interactive UI components.
- **Spotify Web API:** For fetching song data and managing playlists.
- **HTTP Requests:** For server communication to handle API requests.
- **Authentication:** User authentication for secure access to the Spotify API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

```
node.js
npm
```

### Installing

Steps to get your development environment running:

1. Clone the repo:
   ```
   git clone https://github.com/taylorericson/jammming.git
   ```
2. Install NPM packages:
   ```
   npm install
   ```
3. Set up your Spotify Developer account and retrieve the necessary API keys.
4. Create a `.env` file in the root directory and add your API keys:
   ```
   REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
   ```
5. Start the application:
   ```
   npm start
   ```

   This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

Guide the user on how to use the app, including how to log in, search for songs, view details, and export playlists.

## Contributing

Pull requests are welcome!
