# Twitter API Boilerplate

## Setup:

```
npm install
```
Create a `.env` file in your folder and add your Twitter Developer Keys. Or use the `.env-EXAMPLE` fill in your keys and rename it to `.env`. **Don't commit this!**

```
KEY=...
SECRET=...
TOKEN=...
TOKENSECRET=...

```

## Run: 

```
npm start
```

## Input

```
#miami
```

## Output:

```
{
  created_at: 'Wed Oct 28 18:59:20 +0000 2020',
  id: 1321526983696674800,
  id_str: '1321526983696674821',
  text: "Damnnn 8 years go @clubspacemiami the good ol' days 😎🔥🤙🏼 #housemusic4life #Miami #SpaceCadet I miss it https://t.co/Cf3LfdAywW",
  truncated: false,
  entities: {
    hashtags: [Array],
    symbols: [],
    user_mentions: [Array],
    urls: [],
    media: [Array]
  },
  extended_entities: { media: [Array] },
  metadata: { iso_language_code: 'en', result_type: 'recent' },
  source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user: {
    id: 281555934,
    id_str: '281555934',
    name: '®️3️⃣D®️3️⃣D_🍷',
    screen_name: 'redredwine_12',
    location: 'Chandler, AZ',
    description: 'Cool. Calm & Collected 💯☝️😎 🇨🇴 \n' +
      '\n' +
      '“Whatever the mind can conceive and believe, the mind can achieve.” 🌄🌵',
    url: 'https://t.co/fupa6mNHNN',
    entities: [Object],
    protected: false,
    followers_count: 624,
    friends_count: 492,
    listed_count: 3,
    created_at: 'Wed Apr 13 14:22:15 +0000 2011',
    favourites_count: 9858,
    utc_offset: null,
    time_zone: null,
    geo_enabled: true,
    verified: false,
    statuses_count: 15478,
    lang: null,
    contributors_enabled: false,
    is_translator: false,
    is_translation_enabled: false,
    profile_background_color: '000000',
    profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
    profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
    profile_background_tile: false,
    profile_image_url: 'http://pbs.twimg.com/profile_images/1294710386021679105/SB3UNHJ4_normal.jpg',
    profile_image_url_https: 'https://pbs.twimg.com/profile_images/1294710386021679105/SB3UNHJ4_normal.jpg',
    profile_banner_url: 'https://pbs.twimg.com/profile_banners/281555934/1564035591',
    profile_link_color: '981CEB',
    profile_sidebar_border_color: '000000',
    profile_sidebar_fill_color: '000000',
    profile_text_color: '000000',
    profile_use_background_image: false,
    has_extended_profile: true,
    default_profile: false,
    default_profile_image: false,
    following: false,
    follow_request_sent: false,
    notifications: false,
    translator_type: 'none'
  },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  is_quote_status: false,
  retweet_count: 0,
  favorite_count: 0,
  favorited: false,
  retweeted: false,
  possibly_sensitive: false,
  lang: 'en'
}
```