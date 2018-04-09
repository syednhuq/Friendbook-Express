var path = require('path');
var friends = require('../data/friends.js');

// Export API routes
module.exports = function (app) {

   app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  // Add new friend
  app.post('/api/friends', function (req, res) {

    var feInput = req.body;
    var feResponse = feInput.scores;
    var feName = '';
    var fePic = '';
    var totalDifference = 10000; 

    for (var i = 0; i < friends.length; i++) {

      var diff = 0;
      for (var j = 0; j < feResponse.length; j++) {
        diff += Math.abs(friends[i].scores[j] - feResponse[j]);
      }

      if (diff < totalDifference) {

        totalDifference = diff;
        feName = friends[i].name;
        fePic = friends[i].photo;
      }
    }

    // Add new user
    friends.push(feInput);

    res.json({ status: 'OK', feName: feName, fePic: fePic });
  });
};