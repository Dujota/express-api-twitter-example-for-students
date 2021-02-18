## Express API + Twitter API v2

Requirements:

Dependencies:
```
npm i express twitter dotenv body-parser cookie-parser morgan nodemon debug
```


#### Twitter Setup
- Make a twitter developer account
- Register your application
- obtain the api, api secret and bearer token

- setup a twitter service module
follow steps in the twitter npm documentation for the `Application Only based authentication`
https://www.npmjs.com/package/twitter

- create a `.env` with the credentials for use with our client
```
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY, // api key
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET, // api secret
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});
```

- Twitter service `getRecentTweets(res,req,query)` function will have the following signature `client.get(path, params, callback);`
- path will be: `https://api.twitter.com/2/tweets/search/recent?query=`
ref: https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
- be sure to familiarize yourself with the params available (ie: query, max_results etc. )

#### Express API

- simple route at `/api/tweets`
- parse out our query from the url `example incoming url from browser: /api/tweets?search=someValue` we parse it from `req.query.search`
-  call our `twitterService.getRecentTweets(req,res,query)` method
- respond with json inside the twitter service callback by passing the `(req,res,query)` down to the service

