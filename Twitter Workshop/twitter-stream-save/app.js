console.log("the bot is starting")

// require and load dotenv
require('dotenv').config();
// process the keys from the .env file
let config = {
  consumer_key: process.env.KEY,
  consumer_secret: process.env.SECRET,
  access_token: process.env.TOKEN,
  access_token_secret: process.env.TOKENSECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true     // optional - requires SSL certificates to be valid.
}

// Initialize the local database
const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();

// import twit library
let Twit = require('twit');
// Create a new instance and add your keys to it
var T = new Twit(config);


// If you want to stream some hashtags
let trackTags = {
  track: '#halloween'
}

// If you want to stream users
// You need the user-twitter-id, get it here: http://gettwitterid.com/
// this also includes tweets that mention these profiles.
let trackUsers = {
  // shiffman, processing, casey reas, p5js, guardian, wired
  follow: "14587429, 876624356, 3422140683, 2749534722, 87818409, 1344951"
}

// Setup a stream to continously recieve updates
// add the variable you want to stream as second argument
let stream = T.stream('statuses/filter', trackUsers)

// React on a tweet event
stream.on('tweet', streamEvent);

// Callback function: get the tweet and make a json out of it
// then save it to the database
function streamEvent(data) {

  // console.log(data);
  const timestamp_max = Date.now();
  data.timestamp = timestamp_max;
  database.insert(data);
  console.log("inserted " + data.user.screen_name + " into db 🔥");
}
