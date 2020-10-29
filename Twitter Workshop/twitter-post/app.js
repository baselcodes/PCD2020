console.log("the bot is starting")

// require and load dotenv
require('dotenv').config();
// process the keys from the .env file
let config = {
  consumer_key: process.env.KEY,
  consumer_secret: process.env.SECRET,
  access_token: process.env.TOKEN,
  access_token_secret: process.env.TOKENSECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true     // optional - requires SSL certificates to be valid.
}

// import twit library
let Twit = require('twit');
// Create a new instance and add your keys to it
var T = new Twit(config);

let tweetMessage = {
  status: 'Tomorrow the basel.codes crew will organize the Processing Community Day 2020 online via https://basel.codes/2020. Check it put!'
}

T.post('statuses/update', tweetMessage, tweetedCallback);

function tweetedCallback(err, data, response){
  if (err){
    console.log("Error yo!");
    console.log(err)
  } else {
    console.log("Dude, its posted!")
  }
}





