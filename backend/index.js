const express = require("express");
var cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.clientID,
  clientSecret: process.env.clientSecret,
});

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/spotify-token", (req, res) => {
  // Retrieve an access token
  spotifyApi.clientCredentialsGrant().then(
    function (data) {
      console.log("The access token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);

      res.status(200).send(data.body["access_token"]).end();
    },
    function (err) {
      console.log(
        "Something went wrong when retrieving an access token",
        err.message
      );
      res.status(500).send("Error").end();
    }
  );
});

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running mode on port ${PORT}`));
