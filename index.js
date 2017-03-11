/*jshint esversion: 6 */

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');

app.use(middleware.addHeaders);
//Remember that the app.use() method just applies a function to every request made before passing it on to the next function or eventually sending a response.


//------GET REQUESTS--------
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);
app.get('/skills', mainCtrl.getSkills);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

//------PUT REQUESTS--------
app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);

//------POST REQUESTS--------
app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/family', mainCtrl.postFamily);
app.post('/restaurants', mainCtrl.postRestaurants);
//Because we only want to use this middleware on our skillz 'POST' endpoint we don't want to use the app.use() method; instead we want to pass it into our endpoint's arguments
app.post('/skills', middleware.generateId, mainCtrl.postSkills);

app.listen(5000, () => console.log('listening on 5000'));
