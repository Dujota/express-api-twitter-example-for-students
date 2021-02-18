const express = require('express');

const router = express.Router();

const TwitterService = require('../services/twitter');

/**
 * Get All recent Tweets
 */
router.get('/tweets', function (req, res, next) {
  // basically punt the incoming req off to our service
  TwitterService.getRecentTweets(req, res);
});

module.exports = router;
