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


// If you want to stream some hashtags
let trackTags = {
  track: '#USElection'
}

// If you want to stream users
// You need the user-twitter-id, get it here: http://gettwitterid.com/
let trackUsers = {
  // shiffman, processing, casey reas, p5js, guardian, wired
  follow: "14587429, 876624356, 3422140683, 2749534722, 87818409, 1344951"
}

// Setup a stream to continously recieve updates
// add the variable you want to stream as second argument
let stream = T.stream('statuses/filter', trackTags)

// React on a tweet event
stream.on('tweet', streamEvent);

// Callback function: get the tweet and make a json out of it
function streamEvent(data){
    const element = {};
  
    element.id = data.id_str;
    element.text = data.text;
    element.user_name = data.user.name;
    element.created_at = data.created_at;
    // log the element
    console.log(element);
    
    // OPTIONAL: Influence the public opinion and repost the tweet ;)
    // retweetData(element); 
}

// Get the id from the json and retweet the thing!
function retweetData(data){
  let tweetId = {
    id: data.id
  }
  T.post('statuses/retweet/:id', tweetId)
  .catch(function (err) {
    console.log('Error yo!', err.stack)
  })
  .then(function (result) {
    console.log("Dude, it was retweeted!");
  });
}






