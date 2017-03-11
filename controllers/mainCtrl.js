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
  },

  getHobbies: function(req, res){
    let hobbies = {
      hobbies: user.hobbies
    };
    res.json(hobbies);
  },

  getHobbiesByType: function(req, res){
      let hobbies = user.hobbies;
      let newArr = hobbies.filter(function(e){
        // console.log(req.params.type);
        if(e.type === req.params.type){
          return e;
        }
      });
      res.json(newArr);
  },

  getFamily: function(req, res){
    let family = user.family;
    if(req.query.relation){
      let familyRelations = family.filter(function(e){
        if(e.relation === req.query.relation){
          return e;
        }
      });
      res.json(familyRelations);
    }
    res.json(family);
  }
};
