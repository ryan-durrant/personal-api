//jshint esversion: 6
let user = require('../user.js');
let userSkills = require('../skills.js');
let secrets = require('../secrets.js');

module.exports = {
    getName: function(req, res, next) {
        let name = {
            name: user.name
        };
        res.json(name);
        //    res.json(`"location": "${name}"`);
    },

    getLocation: function(req, res, next) {
        let location = {
            location: user.location
        };
        res.json(location);
    },

    getOccupations: function(req, res, next) {
        let occupationsList = user.occupations;
        if (req.query.order) {
            if (req.query.order === 'asc') {
                let ascRes = {
                    occupations: occupationsList.sort()
                };
                res.json(ascRes);
            } else if (req.query.order === 'desc') {
                let descRes = {
                    occupations: occupationsList.reverse()
                };
                res.json(descRes);
            } else {
              let occupations = {
                  occupations: user.occupations
              };
              res.json(occupations);
            }
        }
          else {
              let occupations = {
                occupations: occupationsList
            };
            res.json(occupations);
        }
    },

    getLatestOccupation: function(req, res, next) {
        let latestJob = {
            latestOccupation: user.occupations.slice(user.occupations.length - 1)
        };
        res.json(latestJob);
    },

    getHobbies: function(req, res) {
        let hobbies = {
            hobbies: user.hobbies
        };
        res.json(hobbies);
    },

    getHobbiesByType: function(req, res) {
        let hobbies = user.hobbies;
        let newArr = hobbies.filter(function(e) {
            // console.log(req.params.type);
            if (e.type === req.params.type) {
                return e;
            }
        });
        res.json(newArr);
    },

    getFamily: function(req, res) {
        let family = user.family;
        if (req.query.relation) {
            let familyRelations = family.filter(function(e) {
                if (e.relation === req.query.relation) {
                    return e;
                }
            });
            res.json(familyRelations);
        } else {
            res.json(family);
        }
    },

    getFamilyByGender: function(req, res, next) {
        let family = user.family;
        let newFam = family.filter(function(e) {
            if (e.gender === req.params.gender) {
                return e;
            }
        });
        res.json(newFam);
    },

    getRestaurants: function(req, res, next) {
        let restaurants = user.restaurants;
        if (req.query.rating) {
            let restaurantRatings = restaurants.filter(function(e) {
                if (e.rating >= req.query.rating) {
                    return e;
                }
            });
            res.json(restaurantRatings);
        } else {
            res.json(restaurants);
        }
    },

    getRestaurantsByName: function(req, res, next) {
        let restaurants = user.restaurants;
        let restName;
        let newRestArr = restaurants.filter(function(e) {
            restName = req.params.name.toLowerCase();
            var newStr = restName.replace(/\+/g, ' ');
            //the \ before the + sign is an escape for it because the + sign has special meaning in functions
            if (e.name.toLowerCase() === newStr) {
                return e;
            }
        });
        res.json(newRestArr);
    },

    getSkills: function(req, res, next) {
      if(req.query.experience){
        let newArr = userSkills.skills.filter(function(e){
          if(req.query.experience.toLowerCase() === e.experience.toLowerCase()){
            return e;
          }
        });
        res.json(newArr);
      }
      else {
        let skillset = {
          skills: userSkills.skills
        };
        res.json(skillset);
      }
    },

    getSecrets: function(req, res, next) {
      let response = {
        secrets: secrets.secretsArr
      };
      res.json(response);
    },

    //---------------------PUT REQUESTS------------------


    putName: function(req, res, next){
      user.name = req.body.name;
      newName = user.name;
      let response = {
        name: newName
      };
      res.json(response);
    },

    putLocation: function(req, res, next){
      user.location = req.body.location;
      newLocation = user.location;
      let response = {
        location: newLocation
      };
      res.json(response);
    },


    //---------------------POST REQUESTS------------------


    postHobbies: function(req, res, next){
      user.hobbies.push(req.body.hobbies);
      let response = {
        hobbies: user.hobbies
      };
      res.json(response);
    },

    postOccupations: function(req, res, next){
      user.occupations.push(req.body.occupation);
      let response = {
        occupations: user.occupations
      };
      res.json(response);
    },

    postFamily: function(req, res, next){
      user.family.push(req.body.family);
      let response = {
        family: user.family
      };
      res.json(response);
    },

    postRestaurants: function(req, res, next){
      user.restaurants.push(req.body.restaurants);
      let response = {
        restaurants: user.restaurants
      };
      res.json(response);
    },

    postSkills: function(req, res, next){
      let newSkillObj = {
        "id": req.body.id,
        //the id is generated in the middleware.js file
        "name": req.body.skills.name,
        "experience": req.body.skills.experience
      };
      userSkills.skills.push(newSkillObj);
      let response = {
        skills: userSkills.skills
      };
      res.json(response);
    },






};
