//jshint esversion: 6
let user = require('../user.js');

module.exports = {
  getName: function(req, res, next){
    let name = {
      name: user.name
    };
    res.json(name);
    //    res.json(`"location": "${name}"`);
  },

  getLocation: function(req, res, next){
    let location = {
      location: user.location
    };
    res.json(location);
  },

  getOccupations: function(req, res, next){
    let occupations = {
      occupations: user.occupations
    };
    res.json(occupations);
  },

  getLatestOccupation: function(req, res, next) {
    let latestJob = {
      latestOccupation: user.occupations.slice(user.occupations.length-1)
    };
    res.json(latestJob);
  }
};
