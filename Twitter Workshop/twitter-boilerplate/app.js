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

//twitter get parameters
// https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets
var tweetParams = {
  q: '#miami',
  count: 10,
  //geocode: '37.781157, -122.398720, 1mi',
  // lang: 'de',
  // result_type: 'mixed', // mixed recent or popular
  //tweet_mode: extended 
}

T.get('search/tweets', tweetParams, gotData);

function gotData(err, data, response){
  let tweets = data.statuses;
  console.log(tweets);

}