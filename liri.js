require("dotenv").config();
const keys = require("./keys.js");
const request = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const fs = require("fs");


const spotify =  new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);


const nodeArgs = process.argv;

// const command = process.argv[2];
// const title = process.argv[3];
let titleArr = "";



switch (command) {
	case "my-tweets":
		getTweets();
		break;

	case "spotify-this-song":
		searchSpotify();
		break;

	case "movie-this":
		searchMovie();
		break;

	case "do-what-it-says":
		randomRequest();
		break;
}

function getTweets() {
	request()
}

function searchMovie() {

	for (let i = 2; i < nodeArgs.length; i++) {

		if (i > 2 && nodeArgs.length) {

			titleArr = titleArr + "+" + nodeArgs[i];

		} else {
			titleArr += nodeArgs;
		}
	}

	const omdbUrl = "http://www.omdbapi.com/?t=" + titleArr + "&y=&plot=short&apikey=trilogy";

	console.log(omdbUrl);

	request(omdbUrl, function(error, response, body) {
		if (!error && response.statusCode === 200) {
	
			console.log("*" + JSON.parse(body).Year);
			console.log("*" + JSON.parse(body).imdbRating);
		}

	});
}



function randomRequest() {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}

		console.log(data);
		dataArr = data.split(",");
		console.log(dataArr);

		// dataArr[0]
	});
}